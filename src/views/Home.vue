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

</style>