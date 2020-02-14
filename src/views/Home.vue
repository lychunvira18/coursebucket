<template>
<<<<<<< HEAD
  <div>
    <HomeImage />
    <HomeWatchingCarousel />
  </div>
=======
  <v-card clas class="Content1" height="75%" width="100%">
    <v-row>
      <v-col lg="4" md="6" sm="12">
        <v-card
          outlined
          class="transparent ml-lg-12 pl-lg-12 ml-md-6 white--text text-center Explore"
        >
          <h1 class="display-3"><b>Coursework.</b></h1>
          <h4 class="mt-2">What do you want to learn today?</h4>
          <v-btn class="info mt-6">Explore</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
>>>>>>> 3dd50c047f4e21230ddbba965e33b06f5ea85671
</template>
<script>
<<<<<<< HEAD
import HomeImage from "../components/HomeComponents/HomeImage"
import HomeWatchingCarousel from "../components/HomeComponents/HomeWatchingCarousel"

export default {
  name: "Home",
  components: {
    HomeImage, HomeWatchingCarousel
  }
}
=======
export default {};
>>>>>>> 3dd50c047f4e21230ddbba965e33b06f5ea85671
</script>
<style>
.Content1 {
  background-image: url("../assets/Content1.jpg");
  position: relative;
  background-size: 100%;
  background-blend-mode: darken;
}
.Explore {
  position: relative;
  top: 100%;
}
@media only screen and (max-width: 960px) {
  .Explore {
    position: relative;
    top: 50%;
  }
}
@media only screen and (max-width: 600px) {
  .Explore {
    position: relative;
    top: 30%;
  }
}
</style>
