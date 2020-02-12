<template>
  <v-card flat width="60%">
    <v-text-field
      label="Full name: "
      class="mx-5"
      prepend-icon="mdi-account-circle"
      id="fullname"
    />
    <v-text-field
      label="Username: "
      class="mx-5"
      prepend-icon="mdi-account"
      id="username"
    />
    <v-text-field
      label="Roll number: Ex. 1101801068"
      class="mx-5"
      prepend-icon="mdi-format-list-numbered"
      id="username"
    />
    <v-text-field
      label="Email: Ex. username@example.com"
      class="mx-5"
      prepend-icon="mdi-email"
      id="email"
    />
    <v-btn class="info ml-12 mt-8" width="80%" to="/confirmation">Next</v-btn>
  </v-card>
</template>
<script>
export default {};
</script>
