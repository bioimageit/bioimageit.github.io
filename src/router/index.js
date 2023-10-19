import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import CommunityPage from '../views/CommunityPage.vue'
import InstallPage from '../views/InstallPage.vue'
import InstallWindowsPage from '../views/InstallWindowsPage.vue'
import InstallMacPage from '../views/InstallMacPage.vue'
import InstallLinuxPage from '../views/InstallLinuxPage.vue'
import TutorialsPage from '../views/TutorialsPage.vue'
import EventsPage from '../views/EventsPage.vue'
import VideosPage from '../views/VideosPage.vue'
import DocumentationPage from '../views/DocumentationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'index', component: HomePage },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/community', name: 'community', component: CommunityPage },
    { path: '/install', name: 'install', component: InstallPage },
    { path: '/install-windows', name: 'install-windows', component: InstallWindowsPage },
    { path: '/install-mac', name: 'install-mac', component: InstallMacPage },
    { path: '/install-linux', name: 'install-linux', component: InstallLinuxPage },
    { path: '/tutorials', name: 'tutorials', component: TutorialsPage },
    { path: '/events', name: 'events', component: EventsPage },
    { path: '/videos', name: 'videos', component: VideosPage },
    { path: '/documentation', name: 'documentation', component: DocumentationPage }
  ]
})

export default router
