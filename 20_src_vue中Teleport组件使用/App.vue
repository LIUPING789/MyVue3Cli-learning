<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Child></Child>
  </div>
</template>

<script>
//引入组件
import Child from '@/components/Child.vue';
export default {
  name: 'App',
  components: {
    Child
  },
}
</script>

<style>
.app {
  background-color: red;
  padding: 10px;
}
</style>