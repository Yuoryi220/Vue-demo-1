<template>
  <div>
    {{ n }}
    <hr/>
    <button @click="add1">+1</button>
    <button @click="add2">+2</button>
    <button @click="minus1">-1</button>
    <button @click="minus2">-2</button>
    <hr/>
    <button @click="undo">撤销</button>
    <hr/>

    {{ history }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Watch",
  data() {
    return {
      n: 0,
      history: [],
      inUndoMode: false
    }

  },
  watch: {
    n: function (newValue, oldValue) {
      console.log(this.inUndoMode);
      if (!this.inUndoMode) {
        this.history.push({from: oldValue, to: newValue});
      }
    }
  },
  methods: {
    add1() {
      this.n += 1;
    },
    add2() {
      this.n += 2;
    },
    minus1() {
      this.n -= 1;
    },
    minus2() {
      this.n -= 2;
    },
    undo() {
      const last = this.history.pop();
      this.inUndoMode = true;
      console.log("ha" + this.inUndoMode);
      const old = last.from;
      this.n = old; // watch n 的函数会异步调用
      this.$nextTick(() => {
        this.inUndoMode = false;
      });
    }
  }
}
</script>


//模拟computed
<!--<template>-->
<!--  <div>-->
<!--    {{displayName}}-->
<!--    <button @click="user.nickname=undefined">remove nickname</button>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default{-->
<!--  data: {-->
<!--    user: {-->
<!--      email: "fangfang@qq.com",-->
<!--      nickname: "方方",-->
<!--      phone: "13812312312"-->
<!--    },-->
<!--    displayName: ""-->
<!--  },-->
<!--  watch: {-->
<!--    "user.email": {-->
<!--      handler: "changed",-->
<!--      immediate: true // 第一次渲染是也触发 watch-->
<!--    },-->
<!--    "user.nickname": {-->
<!--      handler: "changed",-->
<!--      immediate: true // 第一次渲染是也触发 watch-->
<!--    },-->
<!--    "user.phone": {-->
<!--      handler: "changed",-->
<!--      immediate: true // 第一次渲染是也触发 watch-->
<!--    }-->
<!--  },-->
<!--// 不如用 computed 来计算 displayName-->
<!--  methods: {-->
<!--    changed() {-->
<!--      console.log(arguments);-->
<!--      const user = this.user;-->
<!--      this.displayName = user.nickname || user.email || user.phone;-->
<!--    }-->
<!--  }-->
<!--  -->
<!--}-->
<!--</script>-->


