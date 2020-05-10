import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  Button,
  Carousel,
  Tooltip,
  Layout,
  Modal,
  Input,
  Select,
  Alert
} from "ant-design-vue";
import "@/assets/font/font-main.less";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Tooltip);
Vue.use(Layout);
Vue.use(Modal);
Vue.use(Input);
Vue.use(Select);
Vue.use(Alert);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
