<template>
  <div id="container">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
    <h1>主应用</h1>
    <br />
    <button @click="changeView('/sub-vue')">vue应用</button>
    &nbsp;
    <button @click="changeView('/sub-react')">react应用</button>
    <br />
    <button @click="changeState">改变数据下发数据</button>
    <hr />

    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    changeView(who) {
      window.history.pushState(null, who, who);
    },
    changeState() {
      this.$actions.setGlobalState({
        userName: "xiaohong",
        age:18,
        current:new Date()
      });
    }
  }
};
</script>

<style lang="scss">
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
