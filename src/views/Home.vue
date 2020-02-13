<template>
  <div>
    <HomeImage />
    <HomeWatchingCarousel />
  </div>
</template>
<script>
import HomeImage from "../components/HomeComponents/HomeImage"
import HomeWatchingCarousel from "../components/HomeComponents/HomeWatchingCarousel"

export default {
  name: "Home",
  components: {
    HomeImage, HomeWatchingCarousel
  }
}
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
