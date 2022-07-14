<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item v-for="item in arr" :key="item" :title="item" :name="item">
      <diV>写完代码去蹦迪</diV>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const activeName = ref(0)
const arr = ref([0, 1, 2, 3, 4, 5])
defineProps({
  todos: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
