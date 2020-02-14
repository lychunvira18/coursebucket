<template>
  <v-card class="mx-auto pb-2" max-width="150">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="125px"
      width="150px"
    ></v-img>

    <v-card-title>
      {{ CourseTitle }}
    </v-card-title>
    <p>{{ CourseDescription }}</p>
  </v-card>
</template>

<script>
export default {
  props: {
    CourseTitle: String,
    CourseDescription: String
  }
};
</script>

<style></style>
