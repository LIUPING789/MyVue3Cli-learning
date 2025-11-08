<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>

    <button @click="test">我是Demo组件，我要点击了</button>

</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { ref, reactive } from 'vue';
export default {
    name: "Demo",
    props: ['msg', 'school'],//接收传过来的值 
    emits: ['hello'],//接收传过来的方法
    setup(props, context) {
        console.log("----setup")
        console.log("----setup----", props)
        console.log("----setup----", context)
        // 定义数据
        //数据源：person：代理对象， reactive:原对象{xxx:xxxx,aaa:aaaa}
        let person = reactive({
            name: '张三',
            age: 18,
        })


        function test() {
            context.emit('hello', '我在学习Vue3...')
        }

        // 返回数据，供模版使用
        return {
            person,
            test

        };
    },
};
</script>

<style></style>
