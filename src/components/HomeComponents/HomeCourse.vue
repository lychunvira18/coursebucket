<template>
  <v-container>
    <h1 class="headline my-6"><b>Popoular Course in #Python</b></h1>
    <v-row>
      <v-col lg="3" md="4" sm="6" v-for="n in 4" :key="n">
        <Thumbnails
          CourseTitle="How to piss into the toilet"
          CourseAuthor="Hun Vikran"
          CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        />
      </v-col>
    </v-row>
    <h1 class="headline my-6"><b>Course you might like</b></h1>
    <div v-for="n in 2" :key="n">
      <v-row>
        <v-col lg="3" md="4" sm="6" v-for="n in 4" :key="n">
          <Thumbnails
            CourseTitle="How to make Love?"
            CourseAuthor="By - Ly Chunvira <3"
            CourseThumbnail="https://i1.sndcdn.com/avatars-000026318548-fk33tm-t500x500.jpg"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import Thumbnails from "../Thumbnails/MainThumbnails";
export default {
  data: () => ({}),
  components: {
    Thumbnails
  }
};
</script>

<style></style>
