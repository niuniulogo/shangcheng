import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$axios=axios
Vue.prototype.qs=qs

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import './css/reset.css';


import App from './App.vue';
import router from './router.js';
new Vue({
	el:'#app',
	render:h=>h(App),
	router
})