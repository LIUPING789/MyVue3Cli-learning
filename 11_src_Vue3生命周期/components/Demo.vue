<template>
    <!-- Vue3 组件中的模版，没有根元素-->
    <h1>我是Demo组件</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>

</template>

<script>
//ref、reactive:定义一个响应式的数据
//注意：ref是一般在基本数据类型上用， reactive 则是在对象中用
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
    name: "Demo",
    setup(props, context) {
        console.log('----setup----')
        let sum = ref(0)
        // 返回数据，供模版使用


        onBeforeMount(() => {
            console.log('----onBeforeMount----')
        })
        onMounted(() => {
            console.log('----onMounted----')
        })
        onBeforeUpdate(() => {
            console.log('----onBeforeUpdate----')
        })
        onUpdated(() => {
            console.log('----onUpdated----')
        })
        onBeforeUnmount(() => {
            console.log('----onBeforeUnmount----')
        })
        onUnmounted(() => {
            console.log('----onUnmounted----')
        })

        return {
            sum,
        };
    },

    /**
     * 以下方法，是通过配制项配制的生命周期方法
     */

    /**
     * 
        beforeCreate() {
            console.log('----beforeCreate----')
        },
        created() {
            console.log('----created----')
        },
        beforeMount() {
            console.log('----beforeMount----')
        },
        mounted() {
            console.log('----mounted----')
        },
    
        beforeUpdate() {
            console.log('----beforeUpdate----')
        },
        updated() {
            console.log('----updated----')
        },
    
        beforeUnmount() {
            console.log('----beforeUnmount----')
        },
        unmounted() {
            console.log('----unmounted----')
        }
    
        */
};
</script>

<style></style>
