import { Vue } from 'meteor/meteormogul:vue-dist';

// data must be a function in a Vue component
// See https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
Vue.component('vc-interpolate',{
  name: 'vc-interpolate',
  template: '#vc-interpolate-template',
  data: function () {
    return {
      msg: "Different for each component instance."
    }
  }
});
