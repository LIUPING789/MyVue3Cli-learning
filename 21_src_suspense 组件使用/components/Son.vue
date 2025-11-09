<template>
    <div class="son">
        <h2>我是Son组件</h2>

        <Dialog></Dialog>
    </div>
</template>

<script>
import Dialog from './Dialog.vue';

export default {
    name: 'Son',
    components: {
        Dialog
    }
}
</script>

<style>
.son {
    background-color: blue;
    padding: 10px;
}
</style>