<template>
<div id="first">
 <span>i am a robot,hello~</span>
  {{myFun()}}
  {{message2}}
  {{message3}}
  <button @click="fn">加2</button>
</div>
 <div id="second">
   {{displayInfo}}
   {{displayInfo}}
<!--   没括号-->
 </div>
  <div id="third">
    {{displayStudent}}
    <button @click="update">update</button>
  </div>
</template>

<script>
export default {
  name: "Demo_1",
  data(){
    return{
      array:[2,3,4,51,3,5,26,7,8,0,245,767,99],
      user:{
        name:'刁悦',
        gender:'女',
        age:'24'
      },
      student:{
        stuName:'小菜',
        stuGender:'男',
        stuAge:'24'
      }
    }
  },
  methods:{
    myFun(){
      return this.array.filter(item=>item%2===0)
    },
    update(){
      this.displayStudent='cc'
      //直接写
    }
  },
  props:['message2','message3','fn'],
  computed:{
    displayInfo(){
      const user=this.user;
      return user.name||user.gender||user.age;
    },
    displayStudent:{
      get(){
        const student=this.student;
        return student.stuName||student.stuGender||student.stuAge;
      },
      set(value){
       this.student.stuName=value;
      }
    }
  }
}
</script>

<style scoped>
#first{
  color:red;
}
#second{
  color:green;
}
#third{
  color:blue;
}
</style>