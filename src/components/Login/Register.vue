<template>
  <v-card flat width="60%">
    <v-form v-model="isValid">
      <v-text-field
        label="Full name: "
        class="mx-lg-5 mx-md-5 "
        prepend-icon="mdi-account-circle"
        id="fullname"
        :rules="textRules"
        v-model="name"
      />
      <v-text-field
        label="Username: "
        class="mx-lg-5 mx-md-5 "
        prepend-icon="mdi-account"
        id="username"
        :rules="textRules"
        v-model="username"
      />
      <v-text-field
        label="Roll number:"
        class="mx-lg-5 mx-md-5 "
        prepend-icon="mdi-format-list-numbered"
        id="rollNumber"
        :rules="numberRules"
        v-model="rollNumber"
      />
      <v-text-field
        type="email"
        label="Email:"
        class="mx-lg-5 mx-md-5 "
        prepend-icon="mdi-email"
        id="email"
        :rules="emailRules"
        v-model="email"
      />
      <router-link to="/login/LoginConfirm">
        <v-btn
          class="info ml-12 mt-8"
          width="80%"
          @click="updateStore()"
          :disabled="!isValid"
          >Next</v-btn
        >
      </router-link>
    </v-form>
  </v-card>
</template>
<script>
import {
  nameField,
  usernameField,
  emailField,
  rollNumberField
} from "../../store/types/authTypes";
export default {
  data: () => ({
    isValid: true,
    textRules: [
      v => !!v || "Username is required!",
      v => v.length >= 3 || "Minimuim length is 3 characters"
    ],
    numberRules: [
      v => !!v || "Roll number is required!",
      v => /\d/.test(v) || "Number only!",
      v => v.length == 10 || "10 Digits is required!",
      v =>
        /^\(?([0-1]{4})\)?([3-9]{1})?([0-1]{3})?([0-9]{2})$/.test(v) ||
        "Invalid!, Example: 1101801001 (Batch 6)"
    ],
    emailRules: [
      v => !!v || "Email is required",
      v =>
        /.+@.+/.test(v) || "E-mail must be valid, Example: username@gmail.com"
    ],
    name: "",
    username: "",
    rollNumber: "",
    email: ""
  }),
  methods: {
    updateStore() {
      this.$store.dispatch(nameField, this.name);
      this.$store.dispatch(usernameField, this.username);
      this.$store.dispatch(rollNumberField, this.rollNumber);
      this.$store.dispatch(emailField, this.email);
      alert(this.$store.state.authentication.name);
    }
  }
};
</script>
