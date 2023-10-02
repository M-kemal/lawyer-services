<template>
  <div class="bg-black text-white">
    <HeaderApp />
    <div class="CostumContainer h-full bg-black">
      <h2 class="heading1 !text-firstColor !text-center mt-10">
        MHK Hukuk Avukat Kadromuz
      </h2>

      <div
        class="flex k1:flex-row flex-col items-start justify-between k1:space-x-2 pt-0 pb-10 k1:py-10 h-full"
      >
        <div class="k1:w-1/4 w-full order-2 k1:order-1 bg-black h-full">
          <div v-for="avukat in avukatlar" :key="avukat.slug" class="">
            <router-link
              :to="{ name: 'AvukatBilgisi', params: { slug: avukat.slug } }"
              class="flex flex-col k1:mb-4 mb-1 relative"
            >
              <button
                class="btn font-header !py-8 !w-[90%] k1:w-full mx-auto text-xl z-40 mt-2 k1:mt-0"
                :data-text="`Av.${avukat.name}`"
                :class="{ 'active-button': isActive(avukat.slug) }"
              >
                <img
                  :src="require(`../../../assets/${avukat.img}.jpeg`)"
                  :alt="avukat.name"
                  class="w-12 h-12 rounded-lg border-2 border-yellow-900 absolute top-2 left-2"
                />
              </button>
            </router-link>
          </div>
        </div>
        <div class="k1:w-3/4 flex w-full h-full bg-black">
          <router-view :key="$route.path"></router-view>

          <!-- <router-view v-slot="{ Component }" :key="$route.path">
              <transition name="slide" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view> -->
        </div>
      </div>
    </div>
    <FooterApp brand="MHK Hukuk" year="2023" developer="mkemal.krdnz">
      <template #icon>
        <LawIcon width="24" height="24" fill="#e1b254" />
      </template>
    </FooterApp>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import jsonData from "@/components/person.json";
import HeaderApp from "../HeaderApp.vue";
import FooterApp from "@/components/Footer/FooterApp.vue";
import LawIcon from "@/components/icons/LawIcon.vue";

export default {
  name: "AvukatlarListesi",
  setup() {
    const avukatlar = ref(jsonData.avukatlar);
    // İlk slug verisini yükle
    const router = useRouter();
    const loadInitialSlug = () => {
      if (avukatlar.value.length > 0) {
        const firstSlug = avukatlar.value[0].slug;
        router.push({ name: "AvukatBilgisi", params: { slug: firstSlug } });
      }
    };
    onMounted(() => {
      loadInitialSlug();
    });

    //! active button img border
    const isActive = (slug) => {
      return router.currentRoute.value.params.slug === slug;
    };

    return {
      avukatlar,
      isActive,
    };
  },
  components: { HeaderApp, FooterApp, LawIcon },
};
</script>

<style>
.active-button img {
  border-color: rgb(252, 233, 134); /* Aktif buton için mavi kenarlık rengi */
  transition: all 0.3s ease;
}
</style>
