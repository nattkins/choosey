<template>
  <v-card>
    <v-banner>
      {{ bannerText }}
    </v-banner>
    <router-link :to="{ name: 'Situation', params: { sid: '1' } }">
      <button id="myButton">Click to begin</button>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bannerText:
        "Ok so you're at work and you want make a difference, help people, make it all hurt a bit less, whatever. That's just great."
    };
  }
};
</script>
