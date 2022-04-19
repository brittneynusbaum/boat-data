<script>
// import Vue from 'vue';
// import JsonCSV from 'vue-json-csv';

// Vue.component('downloadCsv', JsonCSV);

export default {
  data: function () {
    return {
      message: "Welcome to add boat data",
      newBoatParams: {}
    };
  },
  created: function () { },
  methods: {
    newData: function () {
      console.log('adding data');
      console.log(this.newBoatParams);
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
    <p><button v-on:click="newData()"><download-csv :data   = "json_data">
      Download Data
  </download-csv>   </button></p>


 

  </div>
</template>

<style>
</style>