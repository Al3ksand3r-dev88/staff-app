import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StaffDetail from "../components/StaffDetail";
import EditStaff from "../components/EditStaff";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/employee/:id",
        name: "employee-details",
        component: StaffDetail,
        props: true
      },
      {
        path: "/employee/:id/edit",
        name: "edit-employee",
        component: EditStaff,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
