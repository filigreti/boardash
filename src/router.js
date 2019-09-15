import Vue from "vue";
import Router from "vue-router";
import Message from "./views/Message.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Messages",
      component: Message
    }
  ]
});
