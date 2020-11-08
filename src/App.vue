<template>
  <div id="app">
    <Loading v-if="loading"></Loading>
    <Home v-else></Home>
  </div>
</template>

<script>
import Loading from "./components/Loading";
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Home,
    Loading,
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loading = false;
      }, 250);
    });
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  @apply antialiased;
}
</style>
