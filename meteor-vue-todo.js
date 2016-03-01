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
            el: 'body',
            components: {
                App
            }
        });
    });
}
