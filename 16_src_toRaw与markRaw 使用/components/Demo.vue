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

    <hr>
    <button @click="showRawPerson">输出最初始的Person数据</button>

    <hr>

    <h4>车的信息是：{{ person.car }}</h4>
    <button @click="addCar">给人添加一台车</button>

    <button @click="person.car.name += '!'">修改车的名字</button>
    <button @click="person.car.price += '!'">修改车价格</button>

</template>

<script>
//ref、reactive:定义一个响应式的数据
import { ref, reactive, toRefs, readonly, shallowReadonly, toRaw ,markRaw} from 'vue';
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

        function showRawPerson() {
            console.log('----响应式', person)
            console.log('----原始数据', toRaw(person))
        }

        function addCar() {
            let car = {
                name: '宝马',
                price: 10
            }
            // 通过 markRaw，可以让指定数据不让是响应式的
            person.car = markRaw(car)
        }

        // 返回数据，供模版使用
        return {
            sum,
            person,
            showRawPerson,
            addCar,
            ...toRefs(person) // 注意：这只会折到第一层
        };
    },
};
</script>

<style></style>
