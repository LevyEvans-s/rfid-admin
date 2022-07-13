<template>
  <router-view />
</template>

<script setup>
// 解决在刷新页面后，新主题失效：应用加载后，写入style,写入时机在app.vue中

import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor).then(newStyleText => {
  writeNewStyle(newStyleText)
})
</script>

<style>
</style>
