import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data: (app) => ({
    meetup: null,
    number: 3
  }),
  methods: {
    getMeetupData: function () {
      const url = 'https://course-vue.javascript.ru/api/meetups/' + this.number;
      console.log(url);
      fetch(url) 
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.meetup = data;
        });
    }
  },
  created() {
    console.log(this.number, this.meetup);
    this.getMeetupData();
  },

  computed: {
    chosenMeetupTitle: function () {
      //return '112223333';
      return this.meetup.title;
    }
  },
  watch: {
    number: this.getMeetupData()
  }

});
