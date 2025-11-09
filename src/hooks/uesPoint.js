
import { reactive, onMounted, onBeforeUnmount } from 'vue';

export default function () {

    //实现鼠标打点相关的数据
    let point = reactive({
        x: 0,
        y: 0
    })

    //实现鼠标打点的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(`当前X:${event.pageX}:Y:${event.pageY}`)
    }

    //组件挂载完成 获取 windows 事件
    onMounted(() => {
        console.log('----onMounted----')
        window.addEventListener('click', savePoint)
    })
    //即将卸载的时候 移动 window 事件监听
    onBeforeUnmount(() => {
        console.log('----onBeforeUnmount----')
        window.removeEventListener('click', savePoint)
    })

    return point
}
