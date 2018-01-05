import { Vue } from 'meteor/meteormogul:vue-dist';
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

let Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
    let App = Vue.component('app', {
        template: '#app',
        data() {
            return {
                todos: [],
                newTodo: ''
            }
        },
        methods: {
            addNewTodo() {
                Todos.insert({
                    title: this.newTodo
                });
                this.newTodo = '';
            },
            removeTodo(todo) {
                Todos.remove(todo._id);
            }
        },
        created() {
            Tracker.autorun( () => this.todos = Todos.find().fetch() );
        }
    });

    Meteor.startup(() => {
        new Vue({
            el: '#wrapper',
            components: {
                App
            }
        });
    });
}
