/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  // 给自定义方法加提示
  export interface ComponentCustomProperties {
    $net: object
  }

  //
  export default component
}
