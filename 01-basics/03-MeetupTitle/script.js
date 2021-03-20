import Vue from './vendor/vue.esm.browser.js';

let response = await fetch('https://course-vue.javascript.ru/api/meetups');
let text = await response.text();
const meetupsData = JSON.parse(text);
console.log('получено: ', meetupsData);

const app = new Vue({
  el: '#app',
  data: (app) => ({
    meetups: meetupsData,
    title: this.data.meetups(0).title
  }),
  methods: {
  },
  computed: {},
  watch: {}
});

console.log(meetupsData, app.data.meetups);