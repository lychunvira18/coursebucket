<template>
  <v-card flat width="60%">
    <v-form v-model="isValid">
      <v-text-field
        label="Username: "
        class="mx-lg-5 mx-md-5 mt-6"
        prepend-icon="mdi-account"
        id="username"
        :rules="textRules"
        required
        v-model="username"
      />
      <v-text-field
        label="Password: "
        :type="showPassword ? 'text' : 'password'"
        class="mx-lg-5 mx-md-5 "
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        prepend-icon="mdi-lock"
        id="password"
        @click:append="showPassword = !showPassword"
        required
        v-model="password"
        :rules="passwordRules"
      />
      <v-checkbox label="Remember me!" class="ml-lg-12 ml-md-12" />
      <v-btn
        class="LoginBtn info ml-lg-12 mt-3 ml-md-12"
        :disabled="!isValid"
        @click="signin()"
        >Login</v-btn
      >
    </v-form>
  </v-card>
</template>
<script>
import AuthService from "../../backend/AuthService";
export default {
  data: () => ({
    username: "",
    password: "",
    showPassword: false,
    isValid: true,
    textRules: [
      v => !!v || "Username is required!",
      v => v.length >= 3 || "Minimuim length is 3 characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 5) || "Password must have 5+ characters",
      v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
      v => /(?=.*\d)/.test(v) || "Must have one number"
    ]
  }),
  methods: {
    async signin() {
      const response = await AuthService.signin({
        username: this.username,
        password: this.password
      });
      if (response.code == "200") {
        alert(response.msg);
        window.location.replace("/");
      } else alert(response.msg);
    }
  }
};
</script>
<style scoped>
.LoginBtn {
  position: relative;
  width: 80%;
}
@media only screen and (max-width: 960px) {
  .LoginBtn {
    position: relative;
    width: 100%;
  }
}
</style>
