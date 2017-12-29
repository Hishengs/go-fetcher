import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './page/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
  routes: [
  	{ name: 'home', path: '', component: home },
  ]
});

/*router.beforeEach((to, from, next) => {
  next();
});*/

module.exports = router;