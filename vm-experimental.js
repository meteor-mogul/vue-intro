import { Vue } from 'meteor/meteormogul:vue-dist';
import { Meteor } from 'meteor/meteor';

// Explore some concepts:
// 1) programmatic ways to select components
// 2) props
// 3) events

// meteormogul:vus-dist only provides Vue client side
if (Meteor.isClient) {

  // These are component fragments that are used by the render function
  // of the functional component below.
  // See https://vuejs.org/v2/guide/render-function.html#Functional-Components

  // button press
  // The template for this component shows a button and watches for a click to
  // call checkWatch. It also displays message showing last time check.
  var expOne = {
    // Name is mostly just for Vue devtools
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
        let rightNow = new Date();
        this.message = 'Time now is ' + rightNow.toLocaleString();
        // Emit an event named "timecheck" with one argument.
        // This will go up to parent and then be passed back down to the
        // functional component to select which
        // child component to use. So this template can emit an event that
        // might cause this component to be replaced with another.
        this.$emit('timecheck', rightNow.getSeconds() % 3);
      }
    }
  };

  // hover
  // The template for this component watches for a mouseover to call checkWatch.
  // Otherwise, basically does the same thing as the component above.
  // Which template gets used after a checkWatch depends on the seconds % 3.
  var expTwo = {
    name: 'expTwo',
    template: '#vc-experimental-template-2',
    data: function () {
      return {
        stopWatch: new Date().getSeconds() % 3,
        message: 'Time now is ' + new Date().toLocaleString()
      }
    },
    methods: {
      checkWatch: function () {
        let rightNow = new Date();
        this.message = 'Time now is ' + rightNow.toLocaleString();
        this.$emit('timecheck', rightNow.getSeconds() % 3);
      }
    }
  };

  // text input
  // This component's template let's you pick which component you want to use.
  var expThree = {
    name: 'expThree',
    template: '#vc-experimental-template-3',
    data: function () {
      return {
        selector: 0
      }
    },
    methods: {
      checkWatch: function () {
        console.log('[expThree] this selector: ', this.selector, typeof this.selector);
        if (typeof this.selector != 'number') { this.selector = 0; }
        this.$emit('timecheck', this.selector);
      }
    }
  };

  // This is a functional component that delegates to a selected component
  // based on a selector prop passed to it by its parent.
  // NOTE: a functional component has no template and no data
  //       but it does have a context and props passed to it
  Vue.component('vc-experimental', {
    name: 'vc-experimental',
    // This is the magic that makes it a functional component
    functional: true,
    // This is reactive (i.e. dynamic) because template passed it down
    // with v-bind:selector="value"
    // When value changes in parent component, will also change in this
    // context.
    props: { selector:Number },
    // Has a render function instead of a template
    render: function (createElement, context) {
      function selectComponent() {
        let selection = context.props.selector;
        console.log("[vc-experimental] context: ", context);
        console.log("[vc-experimental] selection: ", selection, typeof selection);
        // a switch is the most flexible way to select a delegate component
        switch (selection) {
          case 0:
            return expOne;
            break;
          case 1:
            return expTwo;
            break;
          case 2:
            return expThree;
            break;
          default:
            return { template: "<div>Can't find my pants.</div>" };
        }
      }

      return createElement(
        selectComponent(),
        context.data,
        context.children
      );
    }
  });

  // This is the Vue instance that calls the functional component that
  // selects a delegate component depending on what this component passes
  // in a prop
  vmExperimental = new Vue({
    el: '#vm-experimental',
    template: '#vm-experimental-template',
    data: {
      // This is passed down as a prop to the functional component that
      // does the selecting.
      selector: new Date().getSeconds() % 3
    },
    methods: {
      // This method deals with a timecheck event, which sends up
      // a message from child components.
      // The template calls this function on a timecheck event.
      // Child components emit a timecheck event with one arg, a number
      // that becomes the selector for which child component to
      // display.
      chooseComponent (value) {
        console.log('choose component, value: ', value);
        this.selector = value;
      }
    }
  });

// Meteor is client
}
