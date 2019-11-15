import Vue from 'vue';
import firebase from 'firebase';

// import '@/styles/index.scss';
import '@/assets/css/tailwind.css';
import CKEditor from '@ckeditor/ckeditor5-vue';

// import VTooltip from 'v-tooltip'

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { database } from '@/firebase';

Vue.use(CKEditor);

Vue.config.productionTip = false;

Vue.prototype.$database = database;

let app = null;
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    store.dispatch('user/login', user);

    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
