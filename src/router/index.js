import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/modal",
    name: "modal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ModalView.vue"),
  },
  {
    path: "/hizmetler/:slug",
    name: "hizmetler",

    component: () => import("../components/Avukat/AvukatDetay.vue"),
  },
  {
    path: "/randevu",
    name: "randevu",

    component: () => import("../components/Avukat/RandevuApp.vue"),
  },
  {
    path: "/hizmetlerimiz",
    name: "hizmetlerimiz",

    component: () => import("../components/Avukat/HizmetPage.vue"),
  },

  {
    path: "/avukatlarimiz",
    component: () =>
      import("@/components/Avukat/Avukatlar-Detay/AvukatlarListesi.vue"),
    children: [
      {
        path: ":slug",
        name: "AvukatBilgisi",
        component: () =>
          import("@/components/Avukat/Avukatlar-Detay/AvukatBilgisi"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//! Router ile yönlendirme yapıldığında, yönlendirilen sayfanın top 0 konumuna gitmesi için
router.beforeEach((to, from, next) => {
  // Scroll y konumunu sıfırla
  window.scrollTo(0, 0);

  next();
});

export default router;
