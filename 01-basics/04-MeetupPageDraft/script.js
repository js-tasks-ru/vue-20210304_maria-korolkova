import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Функция, возвращающая словарь заголовков по умолчанию для всех типов пунктов программы
 */
const getAgendaItemDefaultTitles = () => ({
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
});

/**
 * Функция, возвращая словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const getAgendaItemIcons = () => ({
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
});

const localizeDate = (str) => {
  return new Date(str).toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
};

const localizeDateToString = (str) => {
  return new Date(str).toISOString().split('T')[0];
};

const app = new Vue({
  el: '#app',
  
  data: (app) => ({
    meetup: null,
  }),

  methods: {
    getMeetupData: function () {
      const url = API_URL + '/meetups/' + MEETUP_ID;
      fetch(url) 
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.meetup = data;
          console.log(data);
        });
    },
    hasSpeaker: function (item) {
      return item.type === 'talk' ? true : false;
    },
    hasTitle: function (item) {
      return item.title !== null ? true : false;
    },
    icon: function (item) {
      const type = item.type; 
      const obj = getAgendaItemIcons();
      const src = obj[type];
      return `/assets/icons/icon-${src}.svg`;
    },
    showDefaultTitle: function (item) {
      const type = item.type;
      const obj = getAgendaItemDefaultTitles();
      const title = obj[type];
      return title;
    },
  },

  created() {
    this.getMeetupData();
  },

  computed: {
    title: function () {
      if (this.meetup === null) return;
      return this.meetup.title;
    },
    description: function () {
      if (this.meetup === null) return;
      return this.meetup.description;
    },
    organizer: function () {
      if (this.meetup === null) return;
      return this.meetup.organizer;
    },
    place: function () {
      if (this.meetup === null) return;
      return this.meetup.place;
    },
    date: function () {
      if (this.meetup === null) return;
      const dateFormatted = localizeDate(this.meetup.date);
      return dateFormatted;
    },
    datetime: function () {
      if (this.meetup === null) return;
      const dateFormatted = localizeDateToString(this.meetup.date);
      return dateFormatted;
    },
    bgImage: function () {
      if (this.meetup === null || this.meetup.imageId === null|| this.imageSrc === null) return;
      const bgStyle = `--bg-url: url(https://course-vue.javascript.ru/api/images/${this.meetup.imageId})`;
      return bgStyle;
    },
    noAgenda: function () {
      return (this.meetup === null || this.meetup.agenda === null) ? true : false;
    },
    defaultTitle: function (item) {
      const title = this.showDefaultTitle(item.type);
      return title;
    },
  },

});
