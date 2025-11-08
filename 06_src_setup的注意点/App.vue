<template>
  <Demo @hello='showHelloMsg' msg="你好啊。。。" school="湖南大学"></Demo>
</template>

<script>
//引入组件
import Demo from "./components/Demo.vue"
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello 事件，收到的值是:${value}!!!`)
    }

    return {
      showHelloMsg
    }
  }
};
</script>

<style></style>
