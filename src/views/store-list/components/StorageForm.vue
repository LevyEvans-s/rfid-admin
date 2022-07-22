<template>
  <el-dialog :title="$t('msg.form.title')" :model-value="formVisible" @close="closed">
    <el-form label-position="right" label-width="80px">
      <el-form-item :label="$t('msg.form.blockId')" prop="blockId">
        <el-input style="width: 500px" v-model="$props.blockData.block_id" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.tester')" prop="blockId">
        <el-input style="width: 200px" v-model="$props.blockData.tester" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.testDate')" prop="blockId">
        <el-date-picker type="date" v-model="$props.blockData.test_date" placeholder="Pick a date"
          style="width: 500px" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.testPlace')" prop="blockId">
        <el-input style="width: 500px" v-model="$props.blockData.test_place" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.compressive')" prop="blockId">
        <el-input style="width: 200px" v-model="$props.blockData.compressive" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.penetration')" prop="blockId">
        <el-input style="width: 200px" v-model="$props.blockData.penetration" />
      </el-form-item>
      <el-form-item :label="$t('msg.form.rate')" prop="blockId">
        <el-input style="width: 200px" v-model="$props.blockData.rate" />
      </el-form-item>
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
import { defineProps, defineEmits, ref, onMounted } from 'vue'
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
const emits = defineEmits(['updateFormVisible', 'updateForm'])

/**
 * 关闭
 */
const closed = () => {
  emits('updateFormVisible')
}

const i18n = useI18n()
const onConfirm = async () => {
  await updateBlock(props.blockData.id, props.blockData)
  ElMessage.success(i18n.t('msg.form.updateFormSuccess'))
  closed()
  // 更新数据成功
  emits('updateStore')
}
</script>

<style lang="scss" scoped>
</style>
