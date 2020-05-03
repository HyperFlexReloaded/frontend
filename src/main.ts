import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Button, Carousel, Tooltip } from "ant-design-vue";
import "@/assets/font/font-main.less";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Carousel);
Vue.use(Tooltip);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
