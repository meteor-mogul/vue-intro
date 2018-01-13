import { Vue } from 'meteor/meteormogul:vue-dist';
import { Meteor } from 'meteor/meteor'

// These are component fragments that are used by the render function
// of the functional component below.
// See https://vuejs.org/v2/guide/render-function.html#Functional-Components
var vcOne = {
  template: '#vc-one-template'
};
var vcTwo = {
  template: '#vc-two-template'
};
var vcThree = {
  template: '#vc-three-template'
};

// This is a functional Vue component, which means that it has
//  * no data
//  * no this context
// Functional components are fast and useful as wrapper commponents.
// In this case, we use it to programmatically choose one of several other
// components "to delegate to."
// I don't fully understand what "delegate to" means.  Displaying a static
// template is easy, but how to go beyond that?
Vue.component('vc-selector', {
  functional: true,
  props: { childSelection: Number },
  render: function (createElement, context) {
    function selectComponent() {
        let selection = context.props.childSelection;
        console.log("vc-selector selection:", selection, typeof selection);
        switch (selection) {
          case 1:
            return vcOne;
            break;
          case 2:
            return vcTwo;
            break;
          case 3:
            return vcThree;
            break;
          default:
            // throw new Meteor.Error('pants-not-found', "Can't find my pants");
            return { template: "<div>Can't find my pants.</div>" };
        }
    }

    // I don't fully understand the contex.data and context.children arguments
    return createElement(
      selectComponent(),
      context.data,
      context.children
    );
  }
});
