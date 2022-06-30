<style scoped src="./assets/css/all.css">

</style>
<style scoped src="./assets/css/variables.css">

</style>

<template>
  <div id="app">
    <div class="header">
      <NavigationView />
    </div>
    <main class="main-body">
      <router-view />
    </main>
    <!-- <FooterView /> -->
  </div>
</template>



<script>
import NavigationView from "./components/Navigation";
// import FooterView from "./components/Footer";
export default {
  name: "App",

  components: {
    NavigationView,
    // FooterView,
  },

  data: () => ({
    //
  }),
};
</script>