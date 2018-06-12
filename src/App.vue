<template>
  <div class="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './views/Home/Home.vue'
  import City from './views/City/City.vue'

  export default {
    name: "App",
    components: {
      Home,
      City
    }
  }
</script>

<style scoped>

</style>