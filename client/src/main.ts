import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Avatar, Button, Card, Form, FormModel, Input } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
import axios from 'axios';
// import 'ant-design-vue/dist/antd.css';

Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Card);
Vue.use(Avatar);
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:12345';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
