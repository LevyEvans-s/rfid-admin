<template>
  <!-- 一级 menu 菜单 -->
  <el-menu :collapse="!$store.getters.sidebarOpened" :default-active="activeMenu" :uniqueOpened="true"
    :background-color="$store.getters.cssVar.menuBg" :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText" router>
    <!-- 子集 menu 菜单 -->
    <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
// console.log(router.getRoutes())
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// console.log(routes.value)
// 默认激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
