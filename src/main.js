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
import CommunityPage from './components/CommunityPage'
//import ToolsPage from './components/ToolsPage'
import InstallPage from './components/InstallPage'
import InstallWindowsPage from './components/InstallWindowsPage'
import InstallMacPage from './components/InstallMacPage'
import InstallLinuxPage from './components/InstallLinuxPage'
import TutorialsPage from './components/TutorialsPage'
//import MifobioPage from './components/MifobioPage'
import EventsPage from './components/EventsPage'
import VideosPage from './components/VideosPage'
import DocumentationPage from './components/DocumentationPage'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/community', component: CommunityPage },
    { path: '/install', component: InstallPage },
    { path: '/install-windows', component: InstallWindowsPage },
    { path: '/install-mac', component: InstallMacPage },
    { path: '/install-linux', component: InstallLinuxPage },
    { path: '/tutorials', component: TutorialsPage },
    { path: '/events', component: EventsPage },
    { path: '/videos', component: VideosPage },
    { path: '/documentation', component: DocumentationPage }
  ]
})

new Vue({
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')
