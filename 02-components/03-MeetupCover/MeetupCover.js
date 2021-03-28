export default {
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      default: 'Demo meetup'
      },
    link: {
      type: String
    },
  },

  computed: {

    bgImage() {
      if (this.link === null || !this.link) return;
      const bgStyle = `--bg-url: url(${this.link})`;
      return bgStyle;
    },
  },

  template:
  `<div class="meetup-cover" :style="bgImage">
    <h1 class="meetup-cover__title">{{ title }}</h1>
  </div>`
};
