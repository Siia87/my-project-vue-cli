<template>
  <div>
    <b-button pill variant="primary" @click="onClick"
      >Klicka för en öl</b-button
    >
    <div class="container">
      <div id="card">
        <b-card title="Du kanske vill testa:" style="background-color: black">
          <b-card-text>
            <h2>{{ beer[randomBeer()].name }}</h2>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beer: "Här kommer ölen",
    };
  },

  methods: {
    onClick() {
      fetch("https://api.punkapi.com/v2/beers/ ")
        .then((response) => response.json())
        .then((result) => {
          this.beer = result;

          console.log(this.beer);
        });
    },
    randomBeer() {
      return Math.floor(Math.random() * 24);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
#card {
  margin-top: 50px;
  margin-bottom: 50px;
}
h2 {
  color: FEECDB;
  font-style: italic;
}
</style>


