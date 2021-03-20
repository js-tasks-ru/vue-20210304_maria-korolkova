import Vue from './vendor/vue.esm.browser.js';

// From https://jsonplaceholder.typicode.com/comments

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const vm = new Vue({
  el: '#app',
  data: (vm) => ({
    emails: emails,
    searchValue: ' ',
  }),
  
  computed: {
    matchedEmails: function () {
      let result = [];
      const regexp = this.searchValue.toLowerCase();
      emails.map((item) => {
        let obj = {};
        obj.name = item;
        obj.marked = false;
        let str = item.toLowerCase();
        if ((item.length > 0) && (str.search(regexp) !== -1)) {
          obj.marked = true;
        }
        result.push(obj);
      });
      return result;
    }
  }
});
