import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入svg图片
import "@/icons";

// 引入配置文件区分开发开始生产的环境变量
import "@/config";

//
import "@/utils";
Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
