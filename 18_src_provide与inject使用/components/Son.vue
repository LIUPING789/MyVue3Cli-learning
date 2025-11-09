<template>
    <div class="son">
        <h2>我是Son组件(孙),{{name}}---{{price}}</h2>
    </div>
</template>

<script>
//引入组件
import { inject, toRefs} from 'vue';

export default {
    name: 'Son',
    setup(props, context) {
        //接收传过来的数据
        let car = inject('car')

        return {
            car,
            ...toRefs(car)
        }
    }
}
</script>

<style>
.son {
    background-color: blue;
    padding: 10px;
}
</style>