import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCvBc-A-4BlCV8J255iSZ6mL1H9vMTQdCI",
  authDomain: "gol-quiz.firebaseapp.com",
  databaseURL: "https://gol-quiz.firebaseio.com",
  projectId: "gol-quiz",
  storageBucket: "gol-quiz.appspot.com",
  messagingSenderId: "474079569047",
  appId: "1:474079569047:web:6041b667e89bc42d11b5d2",
  measurementId: "G-KZ8S6C98Q7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebase.auth().onAuthStateChanged(function (user) {
  new Vue({
    router,
    store,
    firebase,

    render: h => h(App)
  }).$mount('#app')

})
