<template>
  <v-card flat width="60%">
    <v-text-field
      label="Username: "
      class="mx-5 mt-6"
      prepend-icon="mdi-account"
      id="username"
    />
    <v-text-field
      label="Password: "
      :type="showPassword ? 'text' : 'password'"
      class="mx-5"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      prepend-icon="mdi-lock"
      id="password"
      @click:append="showPassword = !showPassword"
    />
    <v-checkbox label="Remember me!" class="ml-12" />
    <v-btn class="info ml-12 mt-3" width="80%" to="/">Login</v-btn>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    showPassword: false
  })
};
</script>
