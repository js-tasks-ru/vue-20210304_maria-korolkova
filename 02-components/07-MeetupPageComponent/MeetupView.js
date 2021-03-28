import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem
  },

  computed: {
    link() {
      return `https://course-vue.javascript.ru/api/images/${this.meetup.imageId}`;
    },
    dateAsDate() {
      return new Date(this.meetup.date);
    }
  },

  created() {
    console.log(this.meetup);
  },

  template: `
    <div>
      <meetup-cover :link="link" :title="meetup.title" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description" />

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :date="dateAsDate" :place="meetup.place" />
          </div>
        </div>
      </div>
    </div>`,
};
