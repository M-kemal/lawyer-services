<template>
  <div class="bg-black h-full text-white">
    <div class="CostumContainer">
      <HeaderApp />
      <h1 class="heading1 !text-center !text-firstColor mt-10">
        MHK Hukuk Danışmanlığı Hizmetleri
      </h1>
      <div class="my-20 grid h4:grid-cols-1 h8:grid-cols-2 k1:grid-cols-3">
        <div
          class="hizmetler"
          v-for="hizmetler in avukatHizmet"
          :key="hizmetler.id"
        >
          <div class="flex flex-col items-center border p-2 h-full">
            <h2 class="heading3 !mb-0 p-4 !text-gray-200 !text-center w-full">
              {{ hizmetler.kategori }}
            </h2>
            <div class="gradientLine mx-auto"></div>
            <div class="my-10">
              <h3 class="">{{ hizmetler.misyon }}</h3>
            </div>
            <div class="p-2" v-for="dava in hizmetler.davalar" :key="dava.id">
              <h3
                class="py-2 underline underline-offset-8 heading4 !mb-0 !text-firstColor"
              >
                {{ dava.davaAdi }}
              </h3>
              <h3>{{ dava.dava }}</h3>
            </div>
          </div>
        </div>
      </div>
      <FooterApp brand="MHK Hukuk" year="2023" developer="mkemal.krdnz">
        <template #icon>
          <LawIcon width="24" height="24" fill="#e1b254" />
        </template>
      </FooterApp>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderApp from './HeaderApp.vue';
import Avukat from '@/components/data.json';
import FooterApp from '../Footer/FooterApp.vue';
import LawIcon from '../icons/LawIcon.vue';
export default {
  setup() {
    const avukatHizmet = ref(Avukat);

    return { avukatHizmet };
  },
  components: { HeaderApp, FooterApp, LawIcon },
};
</script>

<style lang="scss" scoped></style>
