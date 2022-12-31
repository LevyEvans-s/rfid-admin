<template>
  <div class="store-list-container">
    <!-- 导入导出 -->
    <el-card class="header">
      <div>
        <el-button type="success" @click="onToExcelClick">
          {{ $t('msg.excel.exportExcel') }}
        </el-button>
      </div>
    </el-card>

    <el-card>
      <!-- 试块信息清单 -->
      <el-table :data="tableData" border style="width: 100%">
        <!-- 索引 -->
        <el-table-column label="#" type="index" />
        <!-- 试块编号 -->
        <el-table-column prop="blockId" :label="$t('msg.excel.blockId')">
        </el-table-column>
        <!-- 所属单位 -->
        <el-table-column prop="company" :label="$t('msg.excel.company')">
        </el-table-column>
        <!-- 采样人 -->
        <el-table-column prop="tester" :label="$t('msg.excel.tester')">
        </el-table-column>
        <!-- 采样人工号 -->
        <el-table-column prop="testerId" :label="$t('msg.excel.testerId')">
        </el-table-column>
        <!-- 采样日期 -->
        <el-table-column prop="testDate" :label="$t('msg.excel.testDate')">
          <template #default="{ row }">
            {{ $filters.dateFilter(row.testDate) }}
          </template>
        </el-table-column>
        <!-- 采样地点 -->
        <el-table-column prop="testPlace" :label="$t('msg.excel.testPlace')">
        </el-table-column>
        <!-- 操作 -->
        <el-table-column :label="$t('msg.excel.action')" fixed="right" width="260">
          <template #default="{ row }">
            <el-button type="primary" size="mini" @click="onShowClick(row.blockId)">{{
            $t('msg.excel.check')
            }}</el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)" v-permission="['removeUser']">{{
            $t('msg.excel.remove')
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        v-model:currentPage="page" :page-sizes="[2, 5, 10, 20]" v-model:page-size="size"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>

    <export-to-excel v-model="exportToExcelVisible"></export-to-excel>
    <!-- <storage-form v-model="formVisible" :blockData="blockData" @updateFormVisible="updateFormVisible"
      @updateStore="getListData"></storage-form> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getStoreList, deleteBlock } from '@/api/storage'
import { watchSwitchLang } from '@/utils/i18n'
import ExportToExcel from './components/Export2Excel.vue'
import { useI18n } from 'vue-i18n'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
// import StorageForm from './components/StorageForm.vue'
// import { dateFilter } from '@/filter'

// 数据相关
const tableData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(2)

// 获取数据的方法
const getListData = async () => {
  const result = await getStoreList({
    page: page.value,
    size: size.value
  })
  tableData.value = result.list
  total.value = result.total
}
getListData()
watchSwitchLang(getListData)
// 分页相关
/**
 * size 改变触发
 */
const handleSizeChange = currentSize => {
  size.value = currentSize
  getListData()
}

/**
 * 页码改变触发
 */
const handleCurrentChange = currentPage => {
  page.value = currentPage
  getListData()
}

/**
 * excel 导出点击事件
 */
const exportToExcelVisible = ref(false)
const onToExcelClick = () => {
  exportToExcelVisible.value = true
}

/**
 * 删除按钮点击事件
 */
const i18n = useI18n()
const onRemoveClick = row => {
  ElMessageBox.confirm(
    i18n.t('msg.excel.dialogTitle3') +
    row.blockId +
    i18n.t('msg.excel.dialogTitle2'),
    {
      type: 'warning'
    }
  ).then(async () => {
    await deleteBlock(row.id)
    ElMessage.success(i18n.t('msg.excel.removeSuccess'))
    // 重新渲染数据
    getListData()
  })
}

// 表单修改
const blockData = ref({})
const formVisible = ref(false)

const router = useRouter()

const onShowClick = (blockId) => {
  // row.testDate = dateFilter(row.testDate)
  // blockData.value = row
  // formVisible.value = true
  router.push(`/store/info/${blockId}`)
}

const updateFormVisible = () => {
  formVisible.value = false
}
</script>

<style lang="scss" scoped>
.store-list-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
