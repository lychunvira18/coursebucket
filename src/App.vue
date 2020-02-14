<template>
  <v-app>
    <header>
      <!-- Navigation Bar -->
      <navBar v-if="$route.name != 'Login' && $route.name != 'LoginConfirm'" />
    </header>
    <router-view></router-view>
    <Topic />
    <Course />
    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>
import navBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";
import Topic from "./components/Subject/Topic";
import Course from "./components/Subject/Course";
export default {
  name: "App",

  components: {
    navBar,
    Footer,
    Topic,
    Course
  },

  data: () => ({})
};
</script>
<style scoped></style>
