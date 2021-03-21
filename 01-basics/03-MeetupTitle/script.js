import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  
  data: (app) => ({
    meetup: null,
    number: 0
  }),

  methods: {
    getMeetupData: function () {
      if (this.number === 0) return;
      const url = 'https://course-vue.javascript.ru/api/meetups/' + this.number;
      fetch(url) 
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.meetup = data;
        });
    }
  },

  created() {
    this.getMeetupData();
  },

  computed: {
    chosenMeetupTitle: function () {
      if (this.meetup === null) return;
      return this.meetup.title;
    }
  },

  watch: {
    number: function () {
      this.getMeetupData();
    }
  }
});
