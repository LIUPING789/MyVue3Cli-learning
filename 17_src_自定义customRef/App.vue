<template>
  <input type="text" v-model="keyWorld">
  <h3>{{ keyWorld }}</h3>
</template>

<script>
//引入组件
import { ref, customRef } from "vue";

export default {
  name: "App",
  setup(props, context) {
    //自定义ref
    function myRef(value) {
      let timer
      console.log('---myRef--', value)
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('有人在myRef读取数据了...')
            track()
            return value
          },
          set(newValue) {
            console.log(`有人在myRef数据修改了...${newValue}`)

            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()//通知更新
            }, 500);
          }
        }
      })
    }

    // let keyWorld = ref('hello')//使用Vue提供的ref
    let keyWorld = myRef('hello')//自定义ref

    return {
      keyWorld,
    }
  }
};
</script>

<style></style>
