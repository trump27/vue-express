import Vue from 'vue'
Vue.use(require('vue-resource'))

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  '/': { component: require('./components/Info.vue') },
  '/info': { component: require('./components/Info.vue') },
  '/tasks': { component: require('./components/Tasks.vue') }
})

const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')
