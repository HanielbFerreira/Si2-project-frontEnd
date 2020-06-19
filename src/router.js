import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        alias: "/",
        name: "list",
        component: () => import("./components/BooksList")
      },
      {
        path: "/bookPublishers",
        name: "bookPublishers",
        component: () => import("./components/FormBookPublisher")
      },
      {
        path: "/books",
        name: "books",
        component: () => import("./components/FormBook")
      }
    ]
  });