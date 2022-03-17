<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <h2>这里是子应用</h2>
    <p>{{ $msg.mt }}</p>
    <br />
    <button @click="testFn()">点击测试props方法</button>
    <br />
    <hr />
    <h3>测试globalState</h3>
    <p>{{ userInfo.userName }}、{{ userInfo.age }}、{{ userInfo.current }}</p>
    <div><a style="color:red;" @click="setState()">点击修改global state</a></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userInfo: {
        userName: "--",
        age: "--",
        current: "--"
      }
    };
  },
  methods: {
    testFn() {
      this.$sayHi("test:" + new Date());
    },
    setState(){
      this.$setGlobalState({
        current:new Date()
      })
    }
  },
  mounted() {
    // this.$onGlobalStateChange((state, prev) => {
    //   // if (state.mt !== prev.mt) {
    //   //   this.name = state.mt;
    //   // }
    //   console.log("==========");
    //   console.log(state, prev);
    //   this.userInfo = state;
    // });
    console.log("mounted:")
    const state = this.$getGlobalState()
    console.log('state', state)
    this.userInfo = state
  }
};
</script>

<style lang="scss" scoped>
*{
  background-color: #ffcaca;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
