<template>
  <div>
    <h1>测试页面</h1>
    <ul>
      <li>{{ store.user }}</li>
      <li @click="changeUser">修改user</li>
      <li @click="delUser">删除user</li>
      <li></li>
      <li></li>
    </ul>
    <hr />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'

const store = useUserStore()
const changeUser = () => {
  store.setUser({
    token: '123',
    id: '1',
    account: '',
    mobile: '13888888888',
    avatar: ''
  })
}
const delUser = () => {
  store.delUser()
}
</script>

<style scoped></style>
