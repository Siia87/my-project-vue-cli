<template>
  <div class="container">
    <div id="beers">
      <div v-for="beer in beers" :key="beer.id" :value="beer">
        <b-card style="max-width: 500px">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img alt="bottle" v-bind:src="beer.image_url"></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-text>
                <h2>{{ beer.name }}</h2>
                <h4>{{ beer.tagline }}</h4>
                <p>{{ beer.brewers_tips }}</p>
                <p>{{ beer.abv }} %</p>
              </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    fetch("https://api.punkapi.com/v2/beers/ ")
      .then((response) => response.json())
      .then((result) => {
        this.beers = result;
      });
  },

  data() {
    return {
      beers: null,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

h2 {
  font-style: bolder;
  color: #a96d27;
}
h4 {
  font-style: italic;
}
</style>


 