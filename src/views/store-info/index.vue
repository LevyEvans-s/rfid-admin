<template>
  <div class="store-info-container">
    <el-card class="print-box">
      <el-button type="primary" :loading="printLoading" v-print="printObj">
        {{ $t('msg.storeInfo.print') }}
      </el-button>
    </el-card>
    <el-card>
      <div id="storeInfoBox">
        <!-- 标题 -->
        <h2 class="title">{{$t('msg.storeInfo.title')}}</h2>

        <div class="header">
          <!-- 表格域上 -->
          <el-descriptions border :column="4">
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.company')" align="center">
              {{blockInfo.company}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.isRecycle')" align="center">
              {{ blockInfo.isRecycle ? '是' : '否' }}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.category')" align="center">
              {{blockInfo.category}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.status')" align="center">
              {{blockInfo.status}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.specification')" align="center">
              {{blockInfo.specification}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.strengthGrade')" align="center">
              {{blockInfo.strengthGrade}}
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <div class="middle">
          <el-descriptions border :column="3">
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.requestDays')" align="center">
              {{blockInfo.requestDays}}
            </el-descriptions-item>
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.makeTime')" align="center">
              {{blockInfo.makeTime}}
            </el-descriptions-item>
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.condition')" align="center">
              <el-tag size="small">标准养护</el-tag>
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.part')" align="center">
              {{blockInfo.part}}
            </el-descriptions-item>
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.testDate')" align="center">
              {{blockInfo.testDate}}
            </el-descriptions-item>
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.blockId')" align="center">
              {{blockInfo.blockId}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.testPlace')" align="center">
              {{blockInfo.testPlace}}
            </el-descriptions-item>
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.tester')" align="center">
              {{blockInfo.tester}}
            </el-descriptions-item>
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.testerId')" align="center">
              {{blockInfo.testerId}}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.storeInfo.remark')" align="center">
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <div class="bottom">
          <el-descriptions :column="3" border>
            <el-descriptions-item :label="$t('msg.storeInfo.notion_param1')" label-align="center">
              {{$t('msg.storeInfo.notion_param2')}}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
    <el-card class="submit-box">
      <el-button type="primary" @click="onShowSubmit" :loading="submitLoading">{{ $t('msg.storeInfo.submit') }}
      </el-button>
    </el-card>
  </div>
  <el-dialog v-model="dialogVisible" title="提交表单" width="30%" :before-close="onCloseSubmit">
    <span :style="{'font-size': '16px'}">确认提交吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, ref, reactive, toRefs } from 'vue'
import { blockDetail, updateBlock } from '@/api/storage'
import { dateFilter } from '@/filter'
import { ElMessage } from 'element-plus'

const props = defineProps({
  blockId: {
    type: String,
    required: true
  }
})

const blockInfo = ref({})
const getBlockDetail = async () => {
  const res = await blockDetail(props.blockId)
  blockInfo.value = {
    ...res.data.data,
    status: (res.data.data.status === 1 ? '可检' : '已检'),
    makeTime: dateFilter(res.data.data.makeTime),
    testDate: dateFilter(res.data.data.testDate)
  }
}

getBlockDetail()

const dialogVisible = ref(false)
const onShowSubmit = () => {
  dialogVisible.value = true
}

const submitLoading = ref(false)
const onCloseSubmit = () => {
  submitLoading.value = false
}
const onConfirm = async () => {
  submitLoading.value = true
  const res = await updateBlock(props.blockId, null)
  console.log(res.data)
  if (res.data.success) {
    submitLoading.value = false
    ElMessage({
      message: '修改试块信息成功',
      type: 'success'
    })
    dialogVisible.value = false
  } else {
    dialogVisible.value = false
    submitLoading.value = false
  }
}
const printLoading = ref(false)
const printObj = {
  // 打印区域
  id: 'storeInfoBox',
  // 打印标题
  popTitle: '混凝土试块详细信息',
  // 打印前
  beforeOpenCallback() {
    printLoading.value = true
  },
  // 执行打印
  openCallback() {
    printLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.print-box {
  margin-bottom: 20px;
  text-align: right;
}

#storeInfoBox {
  width: 1024px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 18px;
  }

  .header {
    display: flex;

    ::v-deep .el-descriptions {
      flex-grow: 1;
    }
  }
}

.submit-box {
  margin-top: 50px;
  text-align: center;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
