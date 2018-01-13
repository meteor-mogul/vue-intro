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
          // Render target is an element with id="hello-vue"
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
          message: 'A man a plan a canal Panama'
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
        }
      });

      app6 = new Vue({
        el: '#two-way-binding',
        data: {
          message: 'Hello Vue!'
        }
      });

      // Conditionals and Loops
      // See https://vuejs.org/v2/guide/index.html#Conditionals-and-Loops

      app3 = new Vue({
        el: '#see-me',
        data: {
          seen: true
        },
        methods: {
          toggleSeen: function () {
            this.seen = !this.seen;
          }
        }
      });

      app4 = new Vue({
        el: '#simple-list',
        data: {
          todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ]
        }
      });

      // Composing with Components
      // See https://vuejs.org/v2/guide/index.html#Composing-with-Components

      app7 = new Vue({
        el: '#grocery-list',
        data: {
          groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ],
          count: 3,
          newTodo: ''
        },
        methods: {
          addNewTodo: function () {
            this.groceryList.push({id: this.count, text: this.newTodo });
            this.count += 1;
            this.newTodo = '';
          }
        }
      })

      // More Examples

      // Interpolations
      // See https://vuejs.org/v2/guide/syntax.html#Interpolations
      vmInterpolations = new Vue({
        el: '#vm-interpolations',
        template: '#vm-interpolations-template',
        data: {
          msg: 'in a <span style="color:green">bottle</span>',
          styleObject: {
            fontFamily: "Georgia",
            color: "purple"
          }
        }
      });


      // Functional Components
      // See https://vuejs.org/v2/guide/render-function.html#Functional-Components

      vmFunctional = new Vue({
        el: '#vm-functional',
        template: '#vm-functional-template',
        data: {
          parentSelection: 0
        }
      });

    // Meteor.startup()
    });

// if (Meteor.isClient)
}
