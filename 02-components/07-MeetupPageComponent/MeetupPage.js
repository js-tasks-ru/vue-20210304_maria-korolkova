import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',

  components: {
    MeetupView,
  },

  template: 
  `<div>
    <meetup-view :link="meetup.link" :title="meetup.title" />
  </div>`,
};
