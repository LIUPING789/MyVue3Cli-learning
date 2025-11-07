<template>
  <!-- Vue3 组件中的模版，没有根元素-->
  <h1>我是App组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">点击我</button>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 定义数据
    let name = "张三";
    let age = 18;

    // 定义方法
    function sayHello() {
      alert(`Hello,我是： ${name}! 我今年 ${age} 岁了.`);
    }
    // 返回数据，供模版使用
    return {
      name,
      age,
      sayHello,
    };
  },
};
</script>

<style>
</style>
