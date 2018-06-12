<template>
  <div class="app">
    <!--keep-alive is used to cache the page, avoiding to load the same page multiply.-->
    <!--the exclude is used to define the part that should be reload, cuz some page have different content when it is reloaded-->
    <keep-alive exclude="Detail">
      <!--route has been defined in the router part-->
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