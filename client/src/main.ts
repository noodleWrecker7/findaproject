import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Input, Form, FormModel, Card } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import 'ant-design-vue/dist/antd.css';
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Card);
Vue.config.productionTip = false;

Vue.mixin({
  data: function () {
    return { apiroot: 'http://localhost:12345' };
  }
});
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
