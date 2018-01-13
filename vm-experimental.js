import { Vue } from 'meteor/meteormogul:vue-dist';
import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {

  // These are component fragments that are used by the render function
  // of the functional component below.
  // See https://vuejs.org/v2/guide/render-function.html#Functional-Components
  var expOne = {
    name: 'expOne',
    template: '#vc-experimental-template-1',
    data: function () {
      return {
        stopWatch: new Date().getSeconds() % 3,
        message: 'Time now is ' + new Date().toLocaleString()
      }
    },
    methods: {
      checkWatch: function () {
        this.message = 'Time now is ' + new Date().toLocaleString()
      }
    }
  }

  Vue.component('vc-experimental', {
    name: 'vc-experimental',
    functional: true,
    render: function (createElement, context) {
      return createElement(
        expOne,
        context.data,
        context.children
      );
    }
  });

  // Explore programmatic ways to select components
  vmExperimental = new Vue({
    el: '#vm-experimental',
    template: '#vm-experimental-template'
  });

// Meteor is client
}
