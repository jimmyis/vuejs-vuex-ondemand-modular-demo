<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { requireStoreModule } from "@/store";
requireStoreModule(['y','z']).then();

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    // Checking if the new module was by dispatching some action within it.
    this.$store.dispatch("y/blankAction");
    this.$store.dispatch("z/blankAction");
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
