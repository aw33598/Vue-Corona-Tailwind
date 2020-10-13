<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home';
export default {
  name: "App",
  components: {
    Home
  }
}

</script>

<style>
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  @apply antialiased;
}
</style>
