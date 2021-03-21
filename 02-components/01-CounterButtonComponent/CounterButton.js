export default {
  name: 'CounterButton',

  // props: ['count'],

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++;
    }
  },

  computed: {
    //newCount: this.increment(this.count)
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  // template: '<button type="button" @click="increment" v-model="count">{{ count }}</button>',

  template: '<button type="button" @click="increment">{{ count }}</button>',
};

