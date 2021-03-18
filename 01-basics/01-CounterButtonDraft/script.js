import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data: {
    value: 0
  },
  methods: {
    increase: function () {
      this.value++;
    }
  }
});
