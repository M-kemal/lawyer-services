<template>
  <header class="sticky w-full mx-auto top-0 z-50 bg-secondColor bg-opacity-90">
    <nav class="text-white font-header">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center"
      >
        <RouterLink
          to="/"
          class="flex title-font font-medium items-center mb-4 md:mb-0 cursor-pointer"
        >
          <LawIcon currentColor="#ffd277" />

          <span
            class="ml-3 text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-yellow-500"
            >MHK Hukuk</span
          >
        </RouterLink>

        <!--* Navbar -->
        <nav
          class="k1:mr-auto h8:ml-4 h8:py-1 h8:pl-4 h8:border-l h8:border-yellow-400 hidden h8:flex flex-wrap items-center text-base justify-center uppercase my-4 k1:my-0 text-firstColor"
        >
          <RouterLink
            to="/hizmetlerimiz"
            class="mr-5 cursor-pointer hover:text-white duration-200 ease-in-out flex items-center justify-center"
            >Hizmetlerimiz</RouterLink
          >
          <RouterLink
            to="/avukatlarimiz"
            class="mr-5 cursor-pointer hover:text-white duration-200 ease-in-out flex items-center justify-center"
          >
            Avukat Kadromuz
          </RouterLink>
          <a
            class="mr-5 cursor-pointer hover:text-white duration-200 ease-in-out flex items-center justify-center"
            >Third Link</a
          >
          <a
            class="mr-5 cursor-pointer hover:text-white duration-200 ease-in-out flex items-center justify-center"
            >Fourth Link</a
          >
        </nav>
        <router-link to="/randevu">
          <button
            class="btn firstbtn h8:my-2 k1:my-0 h8:w-36 hidden h8:flex before:hidden before:h8:flex"
            data-text="Randevu & İletişim"
          ></button>
        </router-link>
        <!--* Navbar -->

        <!--! Toogle Navbar  -->
        <div
          class="my-2 w-full flex flex-col items-center justify-center h8:hidden relative"
        >
          <button
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
            type="button"
            @click="toggleNavbar()"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                v-show="!showMenu"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
              <path
                v-show="showMenu"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1L15 15M1 15L15 1"
              />
            </svg>
          </button>
          <nav class="nav" :class="{ 'open': showMenu }">
            <div
              class="flex flex-col w-full p-6 h-full divide-y divide-yellow-400 space-y-2"
            >
              <RouterLink
                to="/hizmetlerimiz"
                href=""
                class="w-full hover:!text-white heading2 !text-firstColor !mb-0 hover:bg-secondColor p-2"
                >Hizmetlerimiz</RouterLink
              >
              <a
                href=""
                class="w-full hover:!text-white heading2 !text-firstColor !mb-0 hover:bg-secondColor p-2"
                >Second Link</a
              >
              <a
                href=""
                class="w-full hover:!text-white heading2 !text-firstColor !mb-0 hover:bg-secondColor p-2"
                >Third Link</a
              >
              <a
                href=""
                class="w-full hover:!text-white heading2 !text-firstColor !mb-0 hover:bg-secondColor p-2"
                >Four Link</a
              >
              <RouterLink to="/randevu" class="w-full pt-4">
                <button
                  class="btn h8:my-2 k1:my-0 flex w-full"
                  data-text="Randevu & İletişim"
                ></button>
              </RouterLink>
            </div>
          </nav>
        </div>
        <!--! Toggle Navbar  -->
      </div>
    </nav>
    <div class="gradientLine !mt-0 !from-yellow-400 !to-gray-400"></div>
  </header>
</template>

<script>
import { ref } from "vue";

import LawIcon from "../icons/LawIcon.vue";
import person from "@/components/person.json";
export default {
  components: { LawIcon },
  setup() {
    const showMenu = ref(false);
    const toggleNavbar = () => {
      showMenu.value = !showMenu.value;
    };

    const sourceData = person;

    return { showMenu, toggleNavbar, destinations: sourceData.destinations };
  },
};
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .firstbtn {
    display: none;
  }
  .firstbtn::before {
    display: none;
  }
  .firstbtn::after {
    display: none;
  }
  .mkk {
    display: flex;
  }
  .mkk::before {
    display: flex;
  }
  .mkk::after {
    display: flex;
  }
}

nav.nav {
  background-color: #000000;

  position: fixed;
  top: 150px;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.nav.open {
  transform: translateX(0);
}
</style>
