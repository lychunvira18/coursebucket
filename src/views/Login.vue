<template>
  <!-- Login Form for the login page -->
  <v-card class="bookIMG" height="100%" width="100%">
    <v-layout justify-center>
      <v-card width="800px" height="550px" class="mx-auto loginCard" flat>
        <v-tabs v-model="tab" centered class="pt-6">
          <v-tab>
            Login
          </v-tab>
          <v-tab>
            Register
          </v-tab>
        </v-tabs>

        <!-- Login Form -->
        <v-tabs-items v-model="tab" class="mt-5">
          <v-tab-item>
            <v-layout justify-center>
              <Login />>
            </v-layout>
          </v-tab-item>

          <!-- Register Form -->
          <v-tab-item>
            <v-layout justify-center>
              <Register />
            </v-layout>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-layout>
  </v-card>
</template>

<script>
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
export default {
  data: () => ({
    tab: null
  }),
  components: {
    Login, Register
  }
};
</script>

<style>
.bookIMG {
  background-image: url("../assets/book.jpg");
}
.loginCard {
  position: absolute;
  top: 17.5%;
}
</style>
