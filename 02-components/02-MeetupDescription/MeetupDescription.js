export default {
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
      required: true
    },
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
};
