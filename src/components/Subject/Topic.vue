<template>
  <v-card max-width="200" @click="Here" class="mx-6 my-12">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="150px"
      width="200px"
    ></v-img>

    <v-card-title>
      Python-3.0
    </v-card-title>

    <v-card-subtitle>
      Programing Language
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style></style>
