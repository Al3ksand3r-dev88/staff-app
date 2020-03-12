import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/employees.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: json.employees
  }
});
