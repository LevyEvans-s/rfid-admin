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
        <h2 class="title">{{ $t('msg.storeInfo.title') }}</h2>

        <div class="header">
          <!-- 表格域上 -->
          <el-descriptions border :column="4">
            <!-- 委托单位 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.company')" align="center">
              <el-input v-model="blockInfo.company" placeholder="请输入委托单位" size="small" />
            </el-descriptions-item>
            <!-- 是否回收 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.isRecycle')" align="center">
              <el-radio-group v-model="blockInfo.isRecycle">
                <el-radio :label="true" size="large">是</el-radio>
                <el-radio :label="false" size="large">否</el-radio>
              </el-radio-group>
            </el-descriptions-item>
            <!-- 项目品种 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.category')" align="center">
              <el-select v-model="blockInfo.category" placeholder="请选择项目品种" size="small">
                <el-option v-for="item in categories" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-descriptions-item>
            <!-- 样品状态 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.status')" align="center">
              <el-radio-group v-model="blockInfo.status">
                <el-radio :label="1" size="large">可检</el-radio>
                <el-radio :label="2" size="large">已检</el-radio>
              </el-radio-group>
            </el-descriptions-item>
            <!-- 规格型号 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.specification')" align="center">
              <el-select v-model="blockInfo.specification" placeholder="请选择规格型号">
                <el-option-group v-for="group in  sepecificationList" :key="group.label" :label="group.label">
                  <el-option v-for="item in group.options" :key="item" :label="item" :value="item" />
                </el-option-group>
              </el-select>
            </el-descriptions-item>
            <!-- 强度等级 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.strengthGrade')" align="center">
              <el-select v-model="blockInfo.strengthGrade" placeholder="请选择强度等级">
                <el-option-group v-for="group in strengthList" :key="group.label" :label="group.label">
                  <el-option v-for="item in group.options" :key="item" :label="item" :value="item" />
                </el-option-group>
              </el-select>
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <div class="middle">
          <el-descriptions border :column="3">
            <!-- 要求龄期 -->
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.requestDays')" align="center">
              <el-select v-model="blockInfo.requestDays" placeholder="请选择项目品种" size="small">
                <el-option v-for="item in requestDays" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-descriptions-item>
            <!-- 制作日期 -->
            <el-descriptions-item span="1:" :label="$t('msg.storeInfo.makeTime')" align="center">
              <el-date-picker v-model="blockInfo.makeTime" type="date" placeholder="制作日期" size="small" />
            </el-descriptions-item>
            <!-- 养护条件 -->
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.condition')" align="center">
              <el-tag size="small">标准养护</el-tag>
            </el-descriptions-item>
            <!-- 试验地点 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.testPlace')" align="center">
              <el-input v-model="blockInfo.testPlace" placeholder="请输入代表部位" size="small" />
            </el-descriptions-item>
            <!-- 应检日期 -->
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.testDate')" align="center">
              <el-date-picker v-model="blockInfo.testDate" type="date" placeholder="制作日期" size="small" />
            </el-descriptions-item>
            <!-- 样品编号 -->
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.blockId')" align="center">
              {{ blockInfo.blockId }}
            </el-descriptions-item>
            <!-- 代表部位 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.part')" align="center">
              <el-input v-model="blockInfo.part" placeholder="请输入代表部位" size="small" />
            </el-descriptions-item>
            <!-- 试验人 -->
            <el-descriptions-item :span="1" :label="$t('msg.storeInfo.tester')" align="center">
              <el-input v-model="blockInfo.tester" placeholder="请输入代表部位" size="small" />
            </el-descriptions-item>
            <!-- 试验人工号 -->
            <el-descriptions-item :span="2" :label="$t('msg.storeInfo.testerId')" align="center">
              <el-input v-model="blockInfo.testerId" placeholder="请输入代表部位" size="small" />
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.storeInfo.remark')" align="center">
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <div class="bottom">
          <el-descriptions :column="3" border>
            <el-descriptions-item :label="$t('msg.storeInfo.notion_param1')" label-align="center">
              {{ $t('msg.storeInfo.notion_param2') }}
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
    <span :style="{ 'font-size': '16px' }">确认修改吗？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blockDetail, updateBlock, getSpecificationList, getStrengthList } from '@/api/storage'
import { dateFilter } from '@/filter'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const blockId = route.path.split('/')[3]
const blockInfo = ref({})
const getBlockDetail = async () => {
  const res = await blockDetail(blockId)
  blockInfo.value = {
    ...res,
    makeTime: dateFilter(res.makeTime),
    testDate: dateFilter(res.testDate)
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

// 项目品种
const categories = [
  {
    value: '混凝土抗压',
    label: '混凝土抗压'
  },
  {
    value: '混凝土抗渗',
    label: '混凝土抗渗'
  },
  {
    value: '混凝土抗折',
    label: '混凝土抗折'
  }
]

// 要求龄期
const requestDays = [
  {
    value: '1',
    label: '1'
  },
  {
    value: '3',
    label: '3'
  },
  {
    value: '7',
    label: '7'
  },
  {
    value: '28',
    label: '28'
  },
  {
    value: '56',
    label: '56'
  },
  {
    value: '60',
    label: '60'
  },
  {
    value: '84',
    label: '84'
  }
]
// 根据形状获取规格列表
// 立方体
const cubeSpecificationList = ref('')
const CubeSpecificationList = async () => {
  const res = await getSpecificationList('cube')
  return res.list
}
CubeSpecificationList().then(res => {
  cubeSpecificationList.value = res
})
// // 圆柱体
// const cylinderSpecificationList = await getSpecificationList('cylinder')
const cylinderSpecificationList = ref('')
const CylinderSpecificationList = async () => {
  const res = await getSpecificationList('cylinder')
  return res.list
}
CylinderSpecificationList().then(res => {
  cylinderSpecificationList.value = res
})

// // 棱柱体
// const prismSpecificationList = await getSpecificationList('prism')
const PrismSpecificationList = async () => {
  const res = await getSpecificationList('prism')
  return res.list
}
const prismSpecificationList = ref('')
const a = async () => {
  prismSpecificationList.value = await PrismSpecificationList()
}
a()

const sepecificationList = computed(() => {
  return [
    {
      label: '立方体',
      options: cubeSpecificationList.value
    },
    {
      label: '圆柱体',
      options: cylinderSpecificationList.value
    },
    {
      label: '棱柱体',
      options: prismSpecificationList.value
    }
  ]
})

// // 根据形状获取强度等级列表
// // 立方体
const cubeStrengthList = ref('')
getStrengthList('cube').then(res => {
  cubeStrengthList.value = res.list
})

// // 圆柱体
const cylinderStrengthList = ref('')
getStrengthList('cylinder').then(res => {
  cylinderStrengthList.value = res.list
})

const strengthList = computed(() => {
  return [
    {
      label: '立方体',
      options: cubeStrengthList.value
    },
    {
      label: '圆柱体',
      options: cylinderStrengthList.value
    }
  ]
})
// console.log('specificationList', sepecificationList)
// console.log('strengthList', strengthList)

const onConfirm = async () => {
  submitLoading.value = true
  const res = await updateBlock(blockId, blockInfo.value)

  // if (res) {
  //   submitLoading.value = false
  ElMessage({
    message: '修改试块信息成功',
    type: 'success'
  })
  dialogVisible.value = false
  submitLoading.value = false
  //   dialogVisible.value = false
  // } else {
  //   dialogVisible.value = false
  //   submitLoading.value = false
  // }
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
