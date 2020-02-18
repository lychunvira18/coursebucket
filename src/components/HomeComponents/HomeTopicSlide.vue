<template>
  <v-container class="text-center">
    <h1 class="headline my-6"><b>Popular Topics</b></h1>
    <v-sheet class="mx-auto" elevation="8" max-width="1200">
      <v-slide-group class="pa-4 Slide-Group mx-auto  " multiple show-arrows>
        <v-slide-item v-for="n in 10" :key="n">
          <v-container class=" mb-2">
            <CardThumbNail
              CourseTitle="Python"
              CourseDescription="programing Langauge"
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
.Slide-Group {
  width: 840px;
}
</style>
