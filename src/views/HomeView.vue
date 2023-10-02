<template>
  <div
    class="w-full h-full bg-black selection:bg-firstColor selection:text-black"
  >
    <div class="text-white bg-black">
      <HeaderApp class="w-full" />
      <div class="my-4">
        <CarouselApp
          :pagination="false"
          :navigation="false"
          :startAutoPlay="true"
          class="h-[25rem] k12:h-[41rem] w-full relative"
          v-slot="{ currentSlide }"
        >
          <SlideApp v-for="(slide, index) in crouselSlide" :key="index">
            <div
              v-show="currentSlide === index + 1"
              class="slide-info absolute top-0 left-0 w-full h-full"
            >
              <!--! TEXT 1 -->
              <div
                v-show="currentSlide === 1"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeInSlide bg-gray-950/25 rounded-2xl p-4 text-center text-firstColor"
              >
                <p
                  class="font-header italic h8:text-4xl animate-fadeInSlide p-2 rounded-lg"
                >
                  MHK Hukuk ,
                </p>
                <p
                  class="font-header italic h8:text-4xl slideInLeft p-2 rounded-lg"
                >
                  alanında uzman avukatlarıyla yanınızda.
                </p>
                <div class="h8:gradientLine h8:animate-leftLine"></div>
              </div>
              <!--! TEXT 2 -->
              <div
                v-show="currentSlide === 2"
                class="absolute top-0 right-0 slideInDown"
              >
                <p
                  class="font-header italic text-4xl animate-fadeInSlide text-gray-200 bg-gray-950/25 p-10 rounded-lg"
                >
                  Hukuki Destek, Size Güven Verir
                </p>
                <div class="gradientLine animate-leftLine"></div>
              </div>
              <!--! TEXT 3 -->
              <div
                v-show="currentSlide === 3"
                class="absolute bottom-10 left-0"
              >
                <p
                  class="font-header italic text-4xl animate-fadeInSlide text-gray-200 bg-gray-950/25 p-10 rounded-lg"
                >
                  Sorunları Çözmek İçin Buradayız . . .
                </p>
                <div class="gradientLine animate-leftLine"></div>
              </div>
              <!--? IMG -->
              <img
                :src="require(`../assets/${slide}`)"
                :alt="slide"
                class="w-full h-full object-cover"
                :class="{
                  'hidden': slide === 'bg-1.jpg',
                  'block': slide !== 'bg-1.jpg',
                }"
              />
              <video
                v-if="slide === 'bg-1.jpg'"
                autoplay
                muted
                ref="myVideo"
                class="w-full h-full object-cover"
              >
                <source :src="require('@/assets/hero.mp4')" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </SlideApp>
        </CarouselApp>
      </div>
      <div class="gradientLine !mt-0 !from-firstColor !to-gray-400"></div>
      <div class="CostumContainer">
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
                Müşteri odaklı yaklaşımımız, hukuki ihtiyaçlarınızı anlamamıza
                ve size özel çözümler sunmamıza olanak tanır.
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
                    Her müvekkilin durumu farklıdır ve bu nedenle yaklaşımımız
                    da farklıdır. Size özel, kişiselleştirilmiş hukuki çözümler
                    sunarız.
                  </span>
                </p>
                <p class="flex flex-col">
                  <span class="heading3 !mb-2 !text-center !text-firstColor"
                    >► Hızlı ve Etkili Çözümler
                  </span>
                  <span class="text-gray-200 font-medium text-lg">
                    Sorunlarınıza hızlı ve etkili bir şekilde yaklaşırız. Hukuki
                    süreçlerden, sizin için en iyi sonuçları elde etmek için
                    çaba sarf ederiz.
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
        <FooterApp brand="MHK Hukuk" year="2023" developer="mkemal.krdnz">
          <template #icon>
            <LawIcon width="24" height="24" fill="#e1b254" />
          </template>
        </FooterApp>
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
import FooterApp from "@/components/Footer/FooterApp.vue";
import { onBeforeMount, ref } from "vue";
import Avukat from "@/components/data.json";
import LawIcon from "@/components/icons/LawIcon.vue";
export default {
  name: "HomeView",
  components: {
    HeaderApp,
    CarouselApp,
    SlideApp,
    FeatureApp,
    FeatureDetail,
    FooterApp,
    LawIcon,
  },
  setup() {
    const crouselSlide = [
      "bg-1.jpg",
      "bg-2.jpg",
      "bg-3.jpg",
      "bg-4.jpg",
      "bg-5.jpg",
    ];

    const detailTitle = ref(Avukat);

    const myVideo = ref(null);

    console.log(myVideo);

    onBeforeMount(() => {
      if (myVideo.value && typeof myVideo.value.play === "function") {
        myVideo.value.currentTime = 3; // Videoyu 5. saniyeden başlat
        myVideo.value.play(); // Videonun otomatik oynatılmasını sağlar
      }
    });

    return { crouselSlide, detailTitle, myVideo };
  },
};
</script>

<style lang="css">
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
</style>
