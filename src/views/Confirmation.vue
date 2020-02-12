<template>
  <!-- Login Form for the login page -->
  <v-card class="bookIMG" height="100%" width="100%">
    <v-layout justify-center>
      <v-card width="800px" height="550px" class="mx-auto loginCard" flat>
        <v-layout justify-center>
          <v-card flat width="60%" class="Form">
            <v-layout justify-center>
              <h2 class="ml-5 mb-8">Password Confirmation</h2>
            </v-layout>
            <v-text-field
              label="Password: "
              :type="showPassword1 ? 'text' : 'password'"
              class="mx-5"
              :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
              prepend-icon="mdi-lock"
              id="password"
              @click:append="showPassword1 = !showPassword1"
            />
            <v-text-field
              label="Confirm Password: "
              :type="showPassword2 ? 'text' : 'password'"
              class="mx-5"
              :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
              prepend-icon="mdi-lock"
              id="cofirmPassword"
              @click:append="showPassword2 = !showPassword2"
            />
            <v-checkbox
              label="I agree with the Terms and Conditions!"
              class="ml-12 pl-7"
            />
            <v-btn class="info ml-12 mt-3" width="80%" to="/">Register</v-btn>
          </v-card>
        </v-layout>
      </v-card>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPassword1: false,
    showPassword2: false
  }),
  components: {}
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
.Form {
  position: absolute;
  top: 15%;
}
</style>
