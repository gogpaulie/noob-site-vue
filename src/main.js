import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import Notifications from 'vue-notification';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueYoutube);
Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
