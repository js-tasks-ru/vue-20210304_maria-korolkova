export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      required: true,
      default: 0
    },
  },

  methods: {
    increment(value) {
      const result = value += 1;
      return result;
    }
  },

  model: {
    prop: 'count',
    
  },

  computed: {
    newCount() {
      return this.props.count;
    },
    sum() {
      return this.increment(this.newCount);
    }
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  // template: '<button type="button" @click="increment" v-model="count">{{ count }}</button>',

  template: '<button type="button" @click="increment">{{ sum }}</button>',
};

