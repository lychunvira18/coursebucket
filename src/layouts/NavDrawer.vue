<template>
  <v-list dense nav class="py-0">
    <v-list-item two-line :class="miniVariant && 'px-0'">
      <v-list-item-avatar>
        <img :src="UserProfile" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ UserName }}</v-list-item-title>
        <v-list-item-subtitle>{{ UserRank }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item v-for="item in items" :key="item.title" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  props: {
    UserName: String,
    UserRank: String,
    UserProfile: String
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Community", icon: "mdi-account-group " },
        { title: "Course", icon: "mdi-note-multiple" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>
