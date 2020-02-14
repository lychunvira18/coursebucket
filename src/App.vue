<template>
  <v-app>
    <!-- Navigation Bar -->
    <navBar
      v-if="$route.name != 'Login' && $route.name != 'LoginConfirmation'"
    />
    <router-view></router-view>
  </v-app>
</template>

<script>
import navBar from "./layouts/NavigationBar";
// import login from "./views/loginForm";
export default {
  name: "App",

  components: {
    navBar
    // login
  },

  data: () => ({})
};
</script>
<style scoped></style>
