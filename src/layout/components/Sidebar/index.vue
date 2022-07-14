<template>
  <div>
    <div class="logo-container">
      <svg-icon icon="rfid" font-size="40px" />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        混凝土试块检测平台
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import { } from 'vue'

const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight)+'px'; // 组件状态驱动CSS
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 13px;
    white-space: nowrap;
  }

  .el-avatar {
    --el-avatar-background-color: none;
  }
}
</style>
