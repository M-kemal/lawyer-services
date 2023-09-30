<template>
  <div class="w-full h-full bg-black">
    <div class="CostumContainer text-white bg-black">
      <HeaderApp class="" />
      <div class="my-4">
        <CarouselApp
          :pagination="false"
          :navigation="false"
          :startAutoPlay="true"
          class="h-[25rem] k12:h-[35rem] w-full relative"
          v-slot="{ currentSlide }"
        >
          <SlideApp v-for="(slide, index) in crouselSlide" :key="index">
            <div
              v-show="currentSlide === index + 1"
              class="slide-info absolute top-0 left-0 w-full h-full"
            >
              <img
                :src="require(`../assets/${slide}.jpg`)"
                :alt="slide"
                class="w-full h-full object-cover"
                :class="{
                  'object-bottom': slide === 'bg-1',
                  'object-cover': slide !== 'bg-1',
                  'object-top': slide === 'bg-4',
                  'object-cover': slide !== 'bg-4',
                }"
              />
            </div>
          </SlideApp>
        </CarouselApp>
      </div>
      <div class="gradientLine !mt-0 !from-yellow-400 !to-gray-400"></div>
      <div class="">
        <FeatureApp>
          <template #header>
            <h1 class="heading1 !text-center !text-yellow-400">
              Firmamız Hakkında
            </h1>
            <p class="font-medium text-lg">
              MHK Hukuk, <br />
              yıllardır Ankara ve çevresinde hukuk alanında müşterilerimize
              profesyonel destek sunan bir hukuk danışmanlığı firmasıdır. <br />
              Müşteri odaklı yaklaşımımız, hukuki ihtiyaçlarınızı anlamamıza ve
              size özel çözümler sunmamıza olanak tanır.
            </p>

            <h2 class="heading2 !text-center mt-16 !text-yellow-400">
              Neden Biz?
            </h2>
            <div
              class="grid h4:grid-cols-1 h8:grid-cols-auto my-20 gap-2 font-semibold text-sm"
            >
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-yellow-400"
                  >Deneyim ve Uzmanlık
                </span>
                Aile hukuku, iş hukuku, ceza hukuku ve daha fazlası konusundaki
                uzmanlarımızla size en iyi hukuki çözümleri sunarız.
              </p>
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-yellow-400"
                  >Kişiselleştirilmiş Hizmet
                </span>
                Her müşterinin durumu farklıdır ve bu nedenle yaklaşımımız da
                farklıdır. Size özel, kişiselleştirilmiş hukuki çözümler
                sunarız.
              </p>
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-yellow-400"
                  >Hızlı ve Etkili Çözümler
                </span>
                Sorunlarınıza hızlı ve etkili bir şekilde yaklaşırız. Hukuki
                süreçlerden, sizin için en iyi sonuçları elde etmek için çaba
                sarf ederiz.
              </p>
            </div>
            <div class="gradientLine !from-yellow-400 !to-gray-400"></div>
            <h1 class="heading2 !text-center mt-10 !text-yellow-400">
              Öne Çıkan Hizmetlerimiz
            </h1>
          </template>
          <template #detail>
            <FeatureDetail
              v-for="title in detailTitle"
              :key="title.id"
              :title="title.kategori"
              :slug="title.slug"
            >
            </FeatureDetail>
          </template>
        </FeatureApp>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApp from "@/components/Avukat/HeaderApp.vue";
import CarouselApp from "@/components/Slider/CarouselApp.vue";
import SlideApp from "@/components/Slider/SlideApp.vue";
import FeatureApp from "@/components/Feature/FeatureApp.vue";
import FeatureDetail from "@/components/Feature/FeatureDetail.vue";
import { ref } from "vue";
import Avukat from "@/components/data.json";
export default {
  name: "HomeView",
  components: {
    HeaderApp,
    CarouselApp,
    SlideApp,
    FeatureApp,
    FeatureDetail,
  },
  setup() {
    const crouselSlide = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];

    const detailTitle = ref(Avukat);

    return { crouselSlide, detailTitle };
  },
};
</script>
