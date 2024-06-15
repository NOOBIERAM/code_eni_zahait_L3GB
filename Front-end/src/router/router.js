import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'

import inscription from '@/components/login_inscription/inscription.vue'
import etatCivile from  '@/views/etatCivile.vue'

import PermisPage from '@/views/PermisPage.vue'
import ImpotPage from '@/views/ImpotPage.vue'
import healthService from '@/views/healthService.vue'
import forumPage from '@/views/forumPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/inscription',
      name:'inscription',
      component:inscription
    },
    {
      path:'/',
      name:'homePage',
      component:homePage
    },
   
    {
      path: '/service_etat_civile',
      name: 'service_etat_civile',
      component:etatCivile,
    },
    
 
    {
      path: '/PermisPage',
      component: PermisPage,
      name: 'Permis'
    },
    {
      path: '/ImpotPage',
      name: 'Impot',
      component: ImpotPage,
    },
    {
      path: '/healthService',
      component: healthService,
      name: 'health'
    },
    {
      path: '/forumPage',
      component: forumPage,
      name: 'forum'
    },
    
  ]
})

export default router