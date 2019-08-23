import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Prediksi from '@/components/Prediksi'
import Log from '@/components/Log'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }, {
    path: '/prediksi',
    name: 'Prediksi',
    component: Prediksi
  }, {
    path: '/log',
    name: 'Log',
    component: Log
  }]
})
