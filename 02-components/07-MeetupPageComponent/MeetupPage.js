import MeetupView from './MeetupView.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupInfo from './MeetupInfo.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

console.log(fetchMeetup);

export default {
  name: 'MeetupPage',

  data() {
    return {
      meetup: null
    }
  },

/*  computed: {
    meetup() {
      this.getMeetupData();
    }
  },
*/
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
    :date="meetup.date" 
    :agenda="meetup.agenda" 
    :type="meetup.type" 
    :title="meetup.title" 
    :place="meetup.place" 
    :description="meetup.description" 
    :organizer="meetup.organizer" 
    :meetup="meetup" />
  </div>`,

  methods: {
    getMeetupData() {
      fetchMeetup(MEETUP_ID).then((response) => this.meetup = response);
      
      //console.log(this.meetup);
    },
  },

  created() {
    this.getMeetupData();
  },
};
