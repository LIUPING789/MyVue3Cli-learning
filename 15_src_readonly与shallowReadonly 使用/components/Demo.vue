<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>

    <h4>当前sum的信息为：{{ sum }}</h4>
    <button @click="sum++">点我+1</button>
    <hr>

    <h2>当前的姓名:{{ name }}</h2>
    <h2>当前的年龄:{{ age }}</h2>
    <h2>当前的薪资:{{ job.salary }}K</h2>

    <button @click="name += '！'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.salary++">修改薪资</button>

</template>

<script>
//ref、reactive:定义一个响应式的数据
import { ref, reactive, toRefs, readonly,shallowReadonly} from 'vue';
export default {
    name: "Demo",
    setup(props, context) {

        let sum = ref(0)

        //定义数据 shallowReactive:浅层次的响应式
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                type: '前端工程师',
                salary: 30
            },
            hohoby: ['抽烟', '喝酒', '烫头']
        },)

        //只能读书，不能修改
        // person = readonly(person)
        //只有第一层不能修改，其它 的可以。 
        person = shallowReadonly(person)



        // 返回数据，供模版使用
        return {
            sum,
            ...toRefs(person) // 注意：这只会折到第一层
        };
    },
};
</script>

<style></style>
