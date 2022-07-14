<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <project-card class="user-card"></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.todos')" name="todos">
              <todo-list />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.storeData')" name="storeData">
              <!--  -->
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.notification')" name="notification">
              <!--  -->
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import notification from './components/Notification.vue'
import StoreData from './components/StoreData.vue'
import TodoList from './components/TodoList.vue'

import { ref } from 'vue'

const activeName = ref('feature')
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
