<template>
  <v-card dark flat tile>
    <v-img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      max-height="600px"
      position="25% 15%"
      aspect-ratio="1.6"
    >
      <v-row class="Text-Row">
        <v-col lg="4">
          <div class="text-center">
            <p class="display-3 font-weight-bold">Coursebucket.</p>
            <p class="subtitle-1">What do you want to learn today?</p>
            <p>
              <v-btn class="blue darken-1 btn">Explore</v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "HomeImage"
};
</script>

<style>
@media only screen and (min-width: 1100px) {
  .Text-Row {
    margin-left: 100px;
    margin-top: 250px;
  }
}
@media only screen and (max-width: 1100px) {
  .Text-Row {
    margin-left: 0;
    margin-top: 150px;
  }
}
@media only screen and (max-width: 800px) {
  .Text-Row {
    margin-left: 0;
    margin-top: 50px;
  }
}
</style>
