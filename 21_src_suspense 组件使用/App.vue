<template>
  <div class="app">
    <h2>我是App组件</h2>

    <Suspense>
      <template v-slot:default>
        <Child />
      </template>

      <template v-slot:fallback>
        <h3>稍等，正在加载中...</h3>
      </template>
    </Suspense>

  </div>
</template>

<script>
//引入组件
// import Child from '@/components/Child.vue';// 静态引入

import { defineAsyncComponent, Suspense } from 'vue';
const Child = defineAsyncComponent(() => import('@/components/Child.vue'))//动态引入-->异步引入
export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    defineAsyncComponent
  }

}
</script>

<style>
.app {
  background-color: red;
  padding: 10px;
}
</style>