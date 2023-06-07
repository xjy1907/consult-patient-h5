import { createPinia } from 'pinia'
// 导入数据持久化的插件
import presist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 注册持久化的插件
pinia.use(presist)

export default pinia
