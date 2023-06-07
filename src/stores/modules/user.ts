import type { User } from './../../types/user.d'
import { ref } from 'vue'

import { defineStore } from 'pinia'
/**
 * 用户store: 存储登录用户相关的数据
 */

export const useUserStore = defineStore('cp-user', () => {
  //全局变量1：登录用户
  //空对象的变量通过 as 断言指定类型
  const user = ref({} as User)

  //方法：
  // 1. 存储用户信息--》登录成功
  const setUser = (userData: User) => {
    user.value = userData
  }

  //删除用户信息--》推出登录
  const delUser = () => {
    user.value = {} as User
  }
  return {
    user,
    setUser,
    delUser
  }
})
