// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA6tdW1nraEFMImrgR4AaVCO6qrJqRw5kc',
      authDomain: 'oauth3-11020.firebaseapp.com',
      databaseURL: 'https://oauth3-11020.firebaseio.com',
      projectId: 'oauth3-11020',
      storageBucket: 'oauth3-11020.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
