import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router.js';
import api from './api';
import App from './page/App.vue';

Vue.use(iView);

function installPlugin(plugin, name){
  window[name] = plugin;
  plugin.install = function(Vue, options){
    Vue.prototype[name] = this;
  };
  Vue.use(plugin);
}
installPlugin(api, 'api');
installPlugin(new Vue(), 'eventHub');

window.app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
