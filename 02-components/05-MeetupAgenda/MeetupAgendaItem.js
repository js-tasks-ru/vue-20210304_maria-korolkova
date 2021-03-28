import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  methods: {
    showDefaultTitle() {
      const type = this.agendaItem.type;
      const obj = getAgendaItemDefaultTitles();
      const title = obj[type];
      return title;
    },

    showIcon() {
        const type = this.agendaItem.type; 
        const obj = getAgendaItemIcons();
        const src = obj[type];
        return `/assets/icons/icon-${src}.svg`;
    },
  },

  computed: {
    description() {
      return this.agendaItem.description;
    },
    icon() {
      return this.showIcon();
    },
    
    defaultTitle() {
      return this.showDefaultTitle();
    }
  },

  template: 
    `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="icon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <!-- <h5 v-if="agendaItem.title" class="meetup-agenda__title">{{ agendaItem.title }}</h5>
        <h5 v-else class="meetup-agenda__title">{{ defaultTitle }}</h5> -->
        <h5 class="meetup-agenda__title">{{ agendaItem.title ? agendaItem.title : defaultTitle }}</h5>
        <p v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
};
