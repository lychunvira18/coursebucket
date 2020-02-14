<template>
    <v-card>
        <v-img 
            :src="CourseThumbnail"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height= "200px"
        >
            <v-card-title class="white--text">{{ CourseTitle }}</v-card-title>
            <v-card-subtitle class="white--text mb-4">{{ CourseAuthor }}</v-card-subtitle>
        </v-img>
    </v-card>
</template>

<script>
export default {
    props: {
        CourseTitle: String,
        CourseAuthor: String,
        CourseThumbnail: String
    }
}
</script>

<style>

</style>