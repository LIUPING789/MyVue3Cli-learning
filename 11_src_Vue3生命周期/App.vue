<template>
  <button @click="isShowDemo = !isShowDemo"> 切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
//引入组件
import { ref } from "vue";
import Demo from "./components/Demo.vue"
export default {
  name: "App",
  components: { Demo },

  setup(props, context) {
    let isShowDemo = ref(true)



    return {
      isShowDemo,
    }
  }
};
</script>

<style></style>
