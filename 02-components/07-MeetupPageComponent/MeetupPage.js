import MeetupView from './MeetupView.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupInfo from './MeetupInfo.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',

  data() {
    return {
      meetup: null
    }
  },

  components: {
    MeetupView,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem
  },

  template: 
  `<div v-if="meetup">
    <meetup-view  
    :meetup="meetup" />
  </div>`,

  methods: {
    getMeetupData() {
      fetchMeetup(MEETUP_ID).then((response) => this.meetup = response);
    },
  },

  created() {
    this.getMeetupData();
  },
};
