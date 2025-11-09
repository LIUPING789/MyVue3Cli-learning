<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>

    <br>
    <hr>
    <h2>当前的信息是:{{ msg }}</h2>

    <button @click="msg += '！'">修改数据</button>

    <br>
    <hr>

    <h2>当前的姓名:{{ person.name }}</h2>
    <h2>当前的年龄:{{ person.age }}</h2>

    <button @click="person.name += '！'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>

</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { ref, watch, reactive, watchEffect } from 'vue';
export default {
    name: "Demo",
    setup(props, context) {

        let sum = ref(0)
        let msg = ref("你好啊")

        let person = ref({
            name: "张三",
            age: 18
        })

        //监视 
        watch(sum, (newValue, oldValue) => {
            console.log('sum变了:', newValue, oldValue)
        }, { immediate: true })

        //watchEffect, 需要的时候 就会自运监视
        watchEffect(() => {
            const x = sum.value
            console.log('sum变了:', newValue, oldValue)
        })


        // 返回数据，供模版使用
        return {
            sum,
            msg,
            person
        };
    },
};
</script>

<style></style>
