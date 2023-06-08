import { createPinia } from 'pinia'
// 导入数据持久化的插件
import presist from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 注册持久化的插件
pinia.use(presist)

export default pinia

// 在index.ts对 modules 中的仓库作统一导出
export * from './modules/user'
