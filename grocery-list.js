import { Vue } from 'meteor/meteormogul:vue-dist';

Vue.component('todo-item', {
  props: ['todo'],
  // Look for template with id="grocery-list-template"
  template: '#grocery-list-template'
})
