<template>
  <div class="app">
    <h2>我是App组件(祖),{{ name }}---{{ price }}</h2>
    <Child></Child>
  </div>
</template>

<script>
//引入vue
import { reactive, toRefs, provide, ref, isReactive, isReadonly, isRef, isProxy, readonly } from 'vue';
export default {
  name: 'App',
  setup(props, context) {
    //创建数据
    let car = reactive({
      name: '奔驰',
      price: 1000
    })
    let sum = ref(0)
    let car2 = readonly(car)
    // 判断响应式数据类型
    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
  }
}
</script>

<style>
.app {
  background-color: red;
  padding: 10px;
}
</style>