<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>

    <hr>
    <h2>当前鼠标点标的坐标为：x:{{ point.x }} y:{{ point.y }}</h2>

</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import uesPoint from '@/hooks/uesPoint';
export default {
    name: "Demo",
    setup(props, context) {
        console.log('----setup----')
        let sum = ref(0)
        //接收hooks 数据
        let point = uesPoint()
        return {
            sum,
            point
        };
    },
};
</script>

<style></style>
