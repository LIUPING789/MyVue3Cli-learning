<template>
  <div class="app">
    <h2>我是App组件(祖),{{name}}---{{price}}</h2>
    <Child></Child>
  </div>
</template>

<script>
//引入vue
import { reactive, toRefs,provide} from 'vue';
//引入组件
import Child from '@/components/Child.vue';
export default {
  name: 'App',
  components: {
    Child
  },
  setup(props, context) {
    //创建数据
    let car = reactive({
      name: '奔驰',
      price: 1000
    })
    //给自己后代组件传递数据
    provide('car',car)
    //返回数据
    return {
      //折数据
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app {
  background-color: red;
  padding: 10px;
}
</style>