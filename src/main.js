import {createApp} from 'vue';
import App from './App.vue';

createApp({}).directive('z', {
    mounted(el) {
        el.addEventListener('click',()=>{
            console.log("z")
        })
    }
})

createApp(App).mount('#app');




// import Vue from "vue";
// import App from "./App.vue";
//
//
//
// Vue.directive('z',{
//     inserted:function(el){
//         el.addEventListener('click',()=>{
//             console.log('z')
//         })
//     }
// })
// new Vue({
//     render:h=>h(App)
// }).$mount("#app")