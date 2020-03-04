import Vue from 'vue';
import VModal from 'vue-js-modal';
import Multiselect from 'vue-multiselect';
import App from './App';
import router from './router';
import store from './store';
import './assets/styles/tailwind.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import './assets/styles/main.scss';

import CButton from './components/ui/CButton';
import CLoader from './components/ui/CLoader';
import Icon from './components/ui/Icon';
import CRadio from './components/ui/form/CRadio';
import CFileInput from './components/ui/form/CFileInput';
import CInput from './components/ui/form/CInput';
import CSelect from './components/ui/form/CSelect';
import CToolbarButton from './components/ui/CToolbarButton';

Vue.component('CButton', CButton);
Vue.component('CLoader', CLoader);
Vue.component('Icon', Icon);
Vue.component('CRadio', CRadio);
Vue.component('CFileInput', CFileInput);
Vue.component('CInput', CInput);
Vue.component('CSelect', CSelect);
Vue.component('CToolbarButton', CToolbarButton);

Vue.use(VModal);
Vue.component('Multiselect', Multiselect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
