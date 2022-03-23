<template>
<div v-x >
  hello,i am directive.vue.

</div>
  <div>
    hello, i accept a global directive.There are some mistakes.
  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Directive"
  ,
  directives:{
    x:{
      mounted(el){
        el.addEventListener('click',()=>{
          console.log('hi@')
        })
      }
    }
  }

}
</script>

<style scoped>

</style>