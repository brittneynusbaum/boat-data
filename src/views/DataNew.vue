<script>


export default {
  data: function () {
    return {
      message: "Welcome to add boat data",
      boats: {},
      newBoatParams: {}

    };
  },
  created: function () { },
  methods: {
    newData: function () {
      console.log('adding data');
      this.boat.push(this.newBoatParams);
      console.log(this.boat)
      this.newBoatParams = {}
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Name: <input v-model="newBoatParams.name"></p>
    <p>Model: <input v-model="newBoatParams.model"></p>
    <p>Description: <input v-model="newBoatParams.description"></p>
    <p><button v-on:click="newData()">Add Data</button></p>
  </div>
</template>

<style>
</style>