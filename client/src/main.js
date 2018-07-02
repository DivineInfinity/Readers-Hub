// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui';
import VueDisqus from 'vue-disqus'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueDisqus);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(VueDisqus);
app
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
