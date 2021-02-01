<template>
  <div class="yourName">
    <div class="container">
      <img alt="Beer" src="../assets/beerBottles.png" /> <br />
      <div>
        <p v-if="userName === null">{{ msg }}</p>

        <input type="text" v-model="userName" />

        <b-button
          pill
          variant="secondary"
          @click="answerName"
          size="sm"
          style="margin-left: 10px"
          >Go!</b-button
        >
      </div>
      <div>
        <p style="margin: 30px">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      userName: null,
      message: "",
    };
  },

  methods: {
    answerName() {
      if (this.userName === null) {
        this.message = "Du skrev inte in något namn";
      } else {
        this.message =
          "Hej " +
          this.userName +
          ", klicka på knappen nedan för att se ett förslag på en go öl!";
      }
    },
  },
};
</script>

<style scoped>
img {
  margin-bottom: 50px;
}
</style>>

