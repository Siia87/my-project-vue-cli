<template>
  <div id="app">
    <div id="nav">
      <img alt="BeerLogo" src="./assets/BeerLogo1.png" /> <br />
      <router-link to="/">Home</router-link> |
      <router-link to="/beers">Beers</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Roboto, sans-serif;
  text-align: center;
  color: #a96d27;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a96d27;
}

#nav a.router-link-exact-active {
  color: #ac8d69;
}
</style>
