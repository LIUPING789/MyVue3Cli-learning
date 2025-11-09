<template>
    <div>
        <button @click="isShowDialog = true">点我弹个窗</button>
        <Teleport to="body">
            <div v-if="isShowDialog" class="mask">
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <h3>一些内容 </h3>
                    <h3>一些内容 </h3>
                    <h3>一些内容 </h3>
                    <h3>一些内容 </h3>
                    <h3>一些内容 </h3>
                    <h3>一些内容 </h3>
                    <button @click="isShowDialog = false">关闭弹窗</button>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Dialog",
    setup(props, context) {
        //弹窗显示
        let isShowDialog = ref(false)

        return {
            isShowDialog
        }
    }

}
</script>

<style>
.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: aqua;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>