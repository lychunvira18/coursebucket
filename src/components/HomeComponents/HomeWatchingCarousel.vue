<template>
  <v-container>
      <h1 class="headline mt-6 mb-2">What people are watching right now</h1>
      <v-carousel 
        height="200px"
        hide-delimiter-background
        hide-delimiters
        >
        <v-carousel-item>
          <v-row>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item>
          <v-row>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
            <v-col cols="3">
              <Thumbnail CourseTitle="How to piss into the toilet" CourseAuthor="Hun Vikran" CourseThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
</template>

<script>
import Thumbnail from "../Thumbnails/MainThumbnails"

export default {
    name: "HomeWatchingCarousel",
    components: {
        Thumbnail
    }
}
</script>

<style>

</style>