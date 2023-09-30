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
              <p
                v-show="slide === 'bg-2'"
                class="absolute top-0 left-0 w-full transition duration-300 ease-in-out animate-wiggle"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                fuga magni voluptate velit ullam facere necessitatibus assumenda
                doloremque placeat fugiat molestias, cupiditate, perferendis
                mollitia? Optio ad omnis animi non dicta?
              </p>
            </div>
          </SlideApp>
        </CarouselApp>
      </div>
      <div class="gradientLine !mt-0 !from-firstColor !to-gray-400"></div>
      <div class="">
        <FeatureApp class="font-body">
          <template #header>
            <h1 class="heading1 !text-center !text-firstColor">
              Firmamız Hakkında
            </h1>
            <p
              class="font-medium text-2xl text-gray-200 w-full h8:w-2/3 flex flex-col items-center justify-center mx-auto italic leading-relaxed"
            >
              <span class="font-bold">MHK Hukuk,</span>
              Ankara ve çevresinde hukuk alanında yıllardır müşterilerilerine
              profesyonel destek sunan bir hukuk danışmanlığı firmasıdır.
              Müşteri odaklı yaklaşımımız, hukuki ihtiyaçlarınızı anlamamıza ve
              size özel çözümler sunmamıza olanak tanır.
            </p>

            <h2 class="heading1 !text-center mt-16 !text-firstColor">
              Neden Biz ?
            </h2>
            <div
              class="grid h4:grid-cols-1 h8:grid-cols-auto my-20 gap-2 font-semibold text-sm"
            >
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-firstColor"
                  >► Deneyim ve Uzmanlık
                </span>
                <span class="text-gray-200 font-medium text-lg">
                  Aile hukuku, iş hukuku, ceza hukuku ve daha fazlası
                  konusundaki uzmanlarımızla size en iyi hukuki çözümleri
                  sunarız.
                </span>
              </p>
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-firstColor"
                  >► Kişiselleştirilmiş Hizmet
                </span>
                <span class="text-gray-200 font-medium text-lg">
                  Her müşterinin durumu farklıdır ve bu nedenle yaklaşımımız da
                  farklıdır. Size özel, kişiselleştirilmiş hukuki çözümler
                  sunarız.
                </span>
              </p>
              <p class="flex flex-col">
                <span class="heading3 !mb-2 !text-center !text-firstColor"
                  >► Hızlı ve Etkili Çözümler
                </span>
                <span class="text-gray-200 font-medium text-lg">
                  Sorunlarınıza hızlı ve etkili bir şekilde yaklaşırız. Hukuki
                  süreçlerden, sizin için en iyi sonuçları elde etmek için çaba
                  sarf ederiz.
                </span>
              </p>
            </div>
            <div class="gradientLine !from-firstColor !to-gray-400"></div>
            <h1 class="heading2 !text-center mt-10 !text-firstColor">
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
