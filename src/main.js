// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import axios from 'axios';
// import { api, RESTAPI } from './axios'; // Import the axios instance


// const app = createApp(App);

// // Register global properties
// app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$api = api;
// app.config.globalProperties.$RESTAPI = RESTAPI;

// // Mount the app to the DOM
// app.use(router).mount('#app');









import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import AttractionDetailed from './pages/AttractionDetailed.vue';
import PhuketAttractions from './pages/PhuketAttractions.vue';
import NotFoundPage from  './pages/ErrorNotFound.vue';




// const routes = [
//   {
//     path: '/attractions',
//     component: AttractionList,
//   },
// ];

// const router = new VueRouter({
//   routes,
//   history: VueRouter.createWebHistory(),
// });

// createApp(App).use(router).use(VueRouter).mount('#app');











// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyArTZyYQXG5-7hZbKvdu4cUqXTpsjGaIj8",
//   authDomain: "vue-site-bcbc6.firebaseapp.com",
//   projectId: "vue-site-bcbc6",
//   storageBucket: "vue-site-bcbc6.appspot.com",
//   messagingSenderId: "93205065646",
//   appId: "1:93205065646:web:1f86c5e8cef2ac804da23f"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{

    path: '/attractions',
    component: PhuketAttractions,
  }, {
    path: '/attractions/:at_id',
    component: AttractionDetailed,
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
