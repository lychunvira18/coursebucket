<template>
  <v-card dark flat tile>
      <v-img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        max-height="600px"
        position="25% 15%"
        aspect-ratio="1.6"
        >
        <v-row style="margin-top: 250px; margin-left: 50px">
          <v-col cols="4">
            <div class="text-center">
              <p class="display-3 font-weight-bold">Coursebucket.</p>
              <p class="subtitle-1">What do you want to learn today?</p>
              <p>
                <v-btn class="blue darken-1">Explore</v-btn>
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
}
</script>

<style>

</style>