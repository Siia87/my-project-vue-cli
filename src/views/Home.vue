<template>
  <b-container class="home">
    <yourName msg="Vänligen fyll i ditt namn i fältet" />

    <oneBeer />
  </b-container>
</template>

<script>
// @ is an alias to /src

import yourName from "@/components/yourName.vue";
import OneBeer from "@/components/oneBeer.vue";

export default {
  name: "Home",
  components: {
    yourName,
    OneBeer,
  },
};
</script>



