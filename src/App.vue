<template>
  <div id="app">
    <h1 v-y >hello,i am App.vue</h1>
    <HelloWorld message="你好我是HelloWorld的msg"/>
    <Demo_1 message2="你好我说Demo_1的msg2" :message3="a" :fn="add"/>
    <Computed/>
    <Watch/>
    <Directive/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo_1 from "@/components/demo";
import Computed from "@/components/computed";
import Watch from "@/components/watch";
import Directive from "@/components/directive";



export default {
  name: 'App',
  data(){
    return {
      a:100
    }
  },
  methods:{
    add(){
      this.a+=2
    }
  },
  components: {
    Directive,

    Watch,
    Computed,
    // eslint-disable-next-line vue/no-unused-components
    Demo_1,
    HelloWorld
  }
  ,
  directives:{
    y:{
      mounted(el){
        el.addEventListener('click',()=>{
          console.log('y')
        })
      }
    }

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
