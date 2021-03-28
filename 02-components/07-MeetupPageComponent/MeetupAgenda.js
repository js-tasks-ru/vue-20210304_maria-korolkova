import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  template:
  `<div v-if="agenda" class="meetup-agenda">
    <meetup-agenda-item v-for="item in agenda" :agendaItem="item" />
  </div>
  <p v-else class="meetup-agenda__empty">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>`
};
