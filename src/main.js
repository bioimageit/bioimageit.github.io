import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
//import ToolsPage from './components/ToolsPage'
import InstallPage from './components/InstallPage'
import InstallWindowsPage from './components/InstallWindowsPage'
import InstallMacPage from './components/InstallMacPage'
import InstallLinuxPage from './components/InstallLinuxPage'
import TutorialsPage from './components/TutorialsPage'
import DevelopersPage from './components/DevelopersPage'
//import MifobioPage from './components/MifobioPage'
import EventsPage from './components/EventsPage'
import VideosPage from './components/VideosPage'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/about', component: AboutPage },
    //{ path: '/tools', component: ToolsPage },
    { path: '/install', component: InstallPage },
    { path: '/install-windows', component: InstallWindowsPage },
    { path: '/install-mac', component: InstallMacPage },
    { path: '/install-linux', component: InstallLinuxPage },
    { path: '/tutorials', component: TutorialsPage },
    { path: '/developers', component: DevelopersPage },
    { path: '/events', component: EventsPage },
    { path: '/videos', component: VideosPage }
    //{ path: '/mifobio', component: MifobioPage }
  ]
})

new Vue({
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')
