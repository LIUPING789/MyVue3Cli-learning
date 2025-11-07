//引入的不再是Vue构造函数，而是引入createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建Vue应用实例对象（类型于vue2 vm）
createApp(App).mount('#app')
