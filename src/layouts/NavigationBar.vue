<template>
  <v-card flat>
    <v-layout row>
      <v-app-bar class="blue darken-1 white--text" dense>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="white--text ml-2"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-12">CourseBucket </v-toolbar-title>

        <v-btn color="white" class="mx-6" text>
          <v-icon>mdi-apps</v-icon> Subjects</v-btn
        >
        <v-btn text color="white" class="mx-6">Popular</v-btn>

        <v-btn text color="white">trending</v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          label="Search"
          color="white"
          class="mt-7"
          outlined
          dense
          flat
        />
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="white"> mdi-book-multiple</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="white" dense>mdi-bell</v-icon>
        </v-btn>
        <!-- Login Form -->
        <v-btn icon to="/login">
          <v-icon color="white">mdi-account-circle</v-icon>
        </v-btn>

        <v-btn text color="white" class="mr-3" dark>
          <v-icon class="mx-2">mdi-logout-variant</v-icon>Sign out</v-btn
        >
      </v-app-bar>
    </v-layout>
    <v-navigation-drawer v-model="drawer" app temporary>
      <NavDrawer />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NavDrawer from "../layouts/NavDrawer";
export default {
  name: "navBar",
  components: {
    NavDrawer
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style></style>
