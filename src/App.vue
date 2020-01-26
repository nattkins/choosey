<template>
  <v-app>
    <h1>{{ Hi }}</h1>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    Hi: "Choose your own path"
  })
};
</script>
