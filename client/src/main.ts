import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Avatar, Button, Card, Form, FormModel, Input } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
// import 'ant-design-vue/dist/antd.css';

Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Card);
Vue.use(Avatar);
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    async request(endpoint = '', method: string, data = {}) {
      const url = this.$store.state.apiroot + endpoint;
      const response = await fetch(url, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        // credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      console.log(response);
      return response.json();
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
