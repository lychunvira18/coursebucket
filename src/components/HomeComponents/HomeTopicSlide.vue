<template>
  <v-container>
    <h1 class="headline my-6">Popular topics</h1>
    <v-sheet class="mx-auto">
      <v-slide-group class="mx-auto" multiple show-arrows>
        <v-slide-item v-for="n in 10" :key="n">
          <v-container class=" mb-2">
            <CardThumbNail
              CourseTitle="Python"
              CourseDescription="Programing Language"
            />
          </v-container>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>
<script>
import CardThumbNail from "../Thumbnails/CardThumbnails";
export default {
  data: () => ({}),
  components: {
    CardThumbNail
  }
};
</script>

<style>

</style>
