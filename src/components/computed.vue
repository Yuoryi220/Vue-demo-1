<!--<template>-->
<!--<title>列表</title>-->
<!--<div>-->
<!--  <button @click="showAll">全部</button>-->
<!--  <button @click="showMale">男</button>-->
<!--  <button @click="showFemale">女</button>-->
<!--  <ul>-->
<!--    <li v-for="item in displayUsers" :key="item">{{item.name}}-{{item.gender}}</li>-->
<!--  </ul>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--let id=0;-->
<!--const createUser=(name,gender)=>{-->
<!--  id+=1;-->
<!--  return {id:id,name:name,gender:gender}-->
<!--}-->
<!--export default {-->
<!--  // eslint-disable-next-line vue/multi-word-component-names-->
<!--  name: "Computed",-->
<!--  data(){-->
<!--    return{-->
<!--      users:[-->
<!--          createUser("刁悦","女"),-->
<!--          createUser("小熊","男"),-->
<!--          createUser("小猫","男"),-->
<!--          createUser("小猪","女"),-->
<!--      ],-->
<!--      displayUsers:[]-->

<!--    }-->
<!--  },-->
<!--  created(){-->
<!--    this.displayUsers=this.users;-->
<!--    console.log(this.displayUsers);//不是数组是proxy对象-->
<!--    console.log(this.users);//不是数组是proxy对象-->
<!--  },-->
<!--  methods:{-->
<!--   showMale(){-->
<!--     this.displayUsers=this.users.filter(item=>item.gender=="男")-->

<!--   },-->
<!--    showFemale(){-->
<!--      this.displayUsers=this.users.filter(item=>item.gender=="女")-->

<!--    } ,-->
<!--    showAll(){-->
<!--    this.displayUsers=this.users-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


//写成计算属性👇

<template>
  <title>列表</title>
  <div>
    <button @click="setGender('')">全部</button>
    <button @click="setGender('male')">男</button>
    <button @click="setGender('female')">女</button>
    <ul>
      <li v-for="item in displayUsers" :key="item">{{item.name}}-{{item.gender}}</li>
    </ul>
  </div>
</template>


<script>
let id=0;
const createUser=(name,gender)=> {
  id += 1;
  return {id: id, name: name, gender: gender}
}
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Computed",
  data(){
    return{
      users:[
        createUser("刁悦","女"),
        createUser("小熊","男"),
        createUser("小猫","男"),
        createUser("小猪","女"),
      ],
      gender:''
    }
  },
  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    displayUsers(){
      const {gender,users}=this;
      const hash={
        male:'男',
        female:'女'
      };
      if(gender===''){
        return users;
      }else if(typeof gender==='string'){
        return users.filter(u=>u.gender===hash[gender]);
    }
  }
  },
  methods:{
    setGender(string){
      this.gender=string;
    }
  }
}
</script>

<style scoped>

</style>