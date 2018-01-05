import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';

// NOTE: Meteor magic (client-side only code)
// We can use this test to send this code only to clients.
// Could also put files under a client folder, in which case this check would happen automatically.
if (Meteor.isClient) {

    Meteor.startup(() => {

      // console.log("Meteor startup");

      // Create Vue instances

      // Declarative Rendering
      // See https://vuejs.org/v2/guide/index.html#Declarative-Rendering

      // NOTE: Meteor magic (variable scopes)
      // Need to declare app as global variable so you can later access this
      // Vue instance by name from the JavaScript console in your browser.
      // Do not scope app with var or local; declare app as global.
      app = new Vue({
          el: '#hello-vue',
          data: {
            message: 'Hello Vue!'
          }
      });

      // console.log("app: ", app);

      app2 = new Vue({
        el: '#hover-mouse-over',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      });

      // Handling User Input
      // See https://vuejs.org/v2/guide/index.html#Handling-User-Input

      app5 = new Vue({
        el: '#reverse-message',
        data: {
          message: 'Hello Vue.js!'
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
        }
      });

    });

}
