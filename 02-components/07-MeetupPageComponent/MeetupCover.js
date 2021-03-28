export default {
  name: 'MeetupCover',

  props: {
    title: {
      type: String
      },
    link: {
      type: String
    },
  },

  computed: {
    /* meetupTitle() {
      return (this.title === null || !this.itle) ? 'Demo meetup' : this.title;
    },*/
    bgImage() {
      if (this.link=== null || !this.link) return;
      const bgStyle = `--bg-url: url(https://course-vue.javascript.ru/api/images/${this.link})`;
      return bgStyle;
    },
  },

  template:
  `<div class="meetup-cover" :style="bgImage">
    <h1 class="meetup-cover__title">{{ title }}</h1>
  </div>`
};
