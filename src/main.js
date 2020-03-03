import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App';
import router from './router';
import store from './store';
import './assets/styles/tailwind.css';
import './assets/styles/main.scss';

import CButton from './components/ui/CButton';
import CLoader from './components/ui/CLoader';
import Icon from './components/ui/Icon';

Vue.component('CButton', CButton);
Vue.component('CLoader', CLoader);
Vue.component('Icon', Icon);

Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
