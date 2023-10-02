<template>
  <div class="bg-black text-white">
    <HeaderApp />
    <div class="CostumContainer h-full">
      <h2 class="heading1 !text-firstColor !text-center mt-10">
        MHK Hukuk Avukat Kadromuz
      </h2>
      <div class="flex items-start justify-between space-x-2 py-10 h-full">
        <div class="w-1/4">
          <div v-for="avukat in avukatlar" :key="avukat.slug" class="">
            <router-link
              :to="{ name: 'AvukatBilgisi', params: { slug: avukat.slug } }"
              class="flex flex-col mb-4 relative"
            >
              <button
                class="btn font-header !py-8 text-xl z-40"
                :data-text="`Av.${avukat.name}`"
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
        <div class="w-3/4 flex">
          <router-view :key="$route.path"></router-view>
        </div>
      </div>
      <FooterApp brand="MHK Hukuk" year="2023" developer="mkemal.krdnz">
        <template #icon>
          <LawIcon width="24" height="24" fill="#e1b254" />
        </template>
      </FooterApp>
    </div>

    <ul>
      <!-- <li v-for="avukat in avukatlar" :key="avukat.slug">
        <router-link
          :to="{ name: 'AvukatBilgisi', params: { slug: avukat.slug } }"
        >
          {{ avukat.name }} - {{ avukat.job }}
        </router-link>
      </li> -->
    </ul>
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
    return {
      avukatlar,
    };
  },
  components: { HeaderApp, FooterApp, LawIcon },
};
</script>

<style></style>
