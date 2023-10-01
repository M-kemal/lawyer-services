<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div
    class="scrollTop fixed bottom-10 right-5 z-50"
    :class="{ hidden: isHidden }"
  >
    <button
      @click="scrollToTop"
      class="btn w-10 h-10 !rounded-xl shadow-yellow-500 shadow-md"
      data-text="▲"
    ></button>
  </div>
  <router-view />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    const isHidden = ref(true);

    window.addEventListener('scroll', () => {
      // Sayfa scrollu 200 pikselden daha fazla ise düğmeyi görünür yap
      isHidden.value = window.scrollY < 200;
    });

    return { scrollToTop, isHidden };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}

/* LEFT */
.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

/* LeftOut */
.slideInLeftOut {
  -webkit-animation-name: slideInLeftOut;
  animation-name: slideInLeftOut;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInLeftOut {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
@keyframes slideInLeftOut {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

/* Right */

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

/* Top */

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

/* Bottom */
.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
