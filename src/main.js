import Vue from 'vue'
import App from './App.vue'

import { MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css' // This line here

Vue.use(MdField);
Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
