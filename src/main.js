import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Vue from 'vue';
// import JsonCSV from 'vue-json-csv';

// Vue.component('downloadCsv', JsonCSV);

// import axios from "axios";

// axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

createApp(App).use(router).mount('#app')
