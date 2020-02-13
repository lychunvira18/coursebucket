<template>
  <!-- Login Form for the login page -->
  <v-card class="bookIMG" height="100%" width="100%">
    <v-form v-model="isValid">
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
                class="mx-lg-5 mx-md-5 "
                :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                prepend-icon="mdi-lock"
                id="password"
                v-model="password"
                @click:append="showPassword1 = !showPassword1"
                :rules="passwordRules"
              />
              <v-text-field
                label="Confirm Password: "
                :type="showPassword2 ? 'text' : 'password'"
                class="mx-lg-5 mx-md-5 "
                :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                prepend-icon="mdi-lock"
                id="cofirmPassword"
                v-model="confirmPassword"
                @click:append="showPassword2 = !showPassword2"
                :rules="passwordRules"
              />
              <v-checkbox
                label="I agree with the Terms and Conditions!"
                class="ml-lg-12 pl-7"
              />
              <v-btn
                class="info ml-lg-12 mt-3"
                width="80%"
                to="/"
                :disabled="!isValid"
                >Register</v-btn
              >
            </v-card>
          </v-layout>
        </v-card>
      </v-layout>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isValid: true,
    password: 0,
    cofirmPassword: 0,
    showPassword1: false,
    showPassword2: false,
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 5) || "Password must have 5+ characters",
      v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
      v => /(?=.*\d)/.test(v) || "Must have one number"
    ]
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
