import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import HotelComponent from './views/testComponents/hotel.component.vue';
import AppartmentComponent from './views/testComponents/appartment.component.vue';
import AtypicalComponent from './views/testComponents/atypical.component.vue';

Vue.component('HotelComponent', HotelComponent);
Vue.component('AppartmentComponent', AppartmentComponent);
Vue.component('AtypicalComponent', AtypicalComponent);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
