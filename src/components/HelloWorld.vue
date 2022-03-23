<template>
<div id="addME">
  {{n}}
</div>
  <button @click="addMe">
    +1
  </button>
  <div id="props">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data() {
   return {n: 0}
 },
  methods:{
    addMe(){
      this.n++;
    }
  },
  props:['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#props{
  border:1px solid green;
}
</style>
