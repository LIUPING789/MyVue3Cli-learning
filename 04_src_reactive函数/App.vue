<template>
  <!-- Vue3 组件中的模版，没有根元素-->
  <h1>我是App组件</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hohoby[0] }}</h2>

  <button @click="changeInfo">修得人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { ref, reactive } from 'vue';
export default {
  name: "App",
  setup() {
    // 定义数据
    //数据源：person：代理对象， reactive:原对象{xxx:xxxx,aaa:aaaa}
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K'
      },
      hohoby: ['抽烟', '喝酒', '烫头']
    })


    // 定义方法
    function changeInfo() {
      person.name = "张三"
      person.age = 99
      person.job.type = 'Android 工程师'
      person.job.salary = '40K'
      person.hohoby[0] = "睡觉"
      console.log(person)
    }

    function addSex() {
      person.sex = '女'
    }

    function deleteName() {
      delete person.name
    }
    // 返回数据，供模版使用
    return {
      person,
      changeInfo,
      addSex,
      deleteName
    };
  },
};
</script>

<style></style>
