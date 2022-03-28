import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";
import setRem from "./setRem";
import "./style/reset.css";
import '@/assets/iconfont/iconfont.css';

Vue.use(Vant)
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  require("./mock/index.js")
}
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
setRem(600, 100);
window.addEventListener("resize", function () {
  setRem(600, 100)
})
console.log(vm);