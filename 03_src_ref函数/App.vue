<template>
  <!-- Vue3 组件中的模版，没有根元素-->
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{job.type}}</h2>
  <h2>工作种类：{{job.salary}}</h2>

  <button @click="changeInfo">修得人的信息</button>
</template>

<script>
//ref:定义一个响应式的数据
import { ref } from 'vue';
export default {
  name: "App",
  setup() {
    // 定义数据
    let name = ref('李四')
    let age = ref(24)
    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })
 
    // 定义方法
    function changeInfo() {
      name.value = "张三"
      age.value = 99
      job.value.type= 'Android 工程师'
      job.value.salary= '40K'
      console.log(name, age)
    }
    // 返回数据，供模版使用
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

<style></style>
