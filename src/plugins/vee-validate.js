import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  // extend,
  // localize,
} from 'vee-validate/dist/vee-validate.full';
// import en from 'vee-validate/dist/locale/en';
// import ru from 'vee-validate/dist/locale/ru';

setInteractionMode('eager');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

export default () => {
  // extend('password', {
  //   validate(value) {
  //     return !!value && value.length >= 8;
  //   },
  //   message(field, { _value_: value }) {
  //     if (value.length < 8) {
  //       return app.i18n.t('errors.password_length');
  //     }
  //     return null;
  //   },
  // });
};
