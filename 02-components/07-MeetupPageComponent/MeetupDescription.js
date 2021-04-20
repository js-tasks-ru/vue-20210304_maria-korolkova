export default {
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
      required: false
    },
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
};
