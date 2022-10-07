<template>
  <el-dialog :title="$t('msg.form.title')" :model-value="formVisible" @close="closed" class="dialog">
    <el-form label-position="right" label-width="100px">
      <el-form-item :label="$t('msg.form.blockId')">
        <el-input style="width: 500px" v-model="formData.blockId" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.company')">
        <el-input style="width: 200px" v-model="formData.company" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.tester')">
        <el-input style="width: 200px" v-model="formData.tester" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.testerId')">
        <el-input style="width: 200px" v-model="formData.testerId" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.testDate')">
        <el-date-picker type="date" v-model="formData.testDate" placeholder="Pick a date" style="width: 500px" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.testPlace')">
        <el-input style="width: 500px" v-model="formData.testPlace" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.compressive')">
        <el-input style="width: 200px" v-model="formData.compressive" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.penetration')">
        <el-input style="width: 200px" v-model="formData.penetration" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.rate')">
        <el-input style="width: 200px" v-model="formData.rate" />
      </el-form-item>
      <div class="img">
        <el-image style="width: 200px; height: 300px" :src="formData.photo" :fit="fit" />
      </div>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
            $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { updateBlock } from '@/api/storage'
import { defineProps, defineEmits, watch, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  formVisible: {
    type: Boolean
  },
  blockData: {
    required: true
  }
})

const formData = ref({})

watch(() => props.blockData,
  val => {
    // 小bug 不能直接formData.value=val 需要先解引用
    const newVal = Object.assign({}, val)
    formData.value = newVal
  }
)
const emits = defineEmits(['updateFormVisible', 'updateForm'])

/**
 * 关闭
 */
const closed = () => {
  emits('updateFormVisible')
}

const i18n = useI18n()
const onConfirm = async () => {
  await updateBlock(props.blockData.id, formData.value)
  ElMessage.success(i18n.t('msg.form.updateFormSuccess'))
  closed()
  // 更新数据成功
  emits('updateStore')
}
</script>

<style lang="scss" scoped>
.dialog {
  position: relative;
}

.img {
  position: absolute;
  top: 80px;
  right: 50px;
}
</style>
