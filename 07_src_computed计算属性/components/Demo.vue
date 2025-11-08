<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>
    姓:<input type="text" v-model="person.firstName" />
    <br>
    名:<input type="text" v-model="person.lastName" />

    <br>
    <span>全名：{{ fullName }}</span>

</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { reactive, computed } from 'vue';
export default {
    name: "Demo",
    setup(props, context) {
        console.log("----setup")
        console.log("----setup----", props)
        console.log("----setup----", context)
        // 定义数据
        //数据源：person：代理对象， reactive:原对象{xxx:xxxx,aaa:aaaa}
        let person = reactive({
            firstName: '张',
            lastName: '三',
        })

        //计算属性
        let fullName = computed(() => {
            //拼接写法
            // return person.firstName + '-' + person.lastName
            //字符串模版写法
            return `${person.firstName}-${person.lastName}`
        })

        // 返回数据，供模版使用
        return {
            person,
            fullName
        };
    },
};
</script>

<style></style>
