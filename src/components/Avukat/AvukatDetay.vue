<template>
  <div class="bg-black h-full text-white">
    <div class="CostumContainer">
      <HeaderApp />
      <div class="flex flex-col items-start justify-center mt-20">
        <h1 class="heading1 !text-center w-full !text-yellow-400">
          {{ myData.kategori }}
        </h1>
        <div class="my-10">
          <h1>{{ myData.misyon }}</h1>
        </div>
        <div class="gradientLine mb-20 !w-1/2 mx-auto"></div>
        <div
          class="flex flex-col k1:flex-row items-center justify-center w-full gap-4 mb-10"
        >
          <div
            class="myCard w-full h-96 text-gray-950 rounded-3xl"
            v-for="hizmetler in myData.hizmetler"
            :key="hizmetler.id"
          >
            <div class="flex flex-col justify-between p-10">
              <p class="heading2 !text-gray-950 border-b p-2 border-b-gray-950">
                {{ hizmetler.baslik }}
              </p>

              <p class="text-lg font-medium mb-4">{{ hizmetler.aciklama }}</p>
              <h4 class="font-bold text-lg mb-4 underline underline-offset-4">
                Detaylar
              </h4>
              <div class="">
                <p class="mr-1 mb-0.5">
                  <span class="">Süre </span> :
                  {{ hizmetler.sure }}
                </p>

                <div v-for="detay in hizmetler.detaylar" :key="detay.id">
                  <p>{{ detay }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="my-6 text-white w-full flex justify-between flex-wrap gap-4"
        >
          <!-- <div
            class="davalar flex"
            v-for="daha in myData.davalar"
            :key="daha.id"
          >
            <div class="w-full flex flex-col">
              <h1 class="font-bold text-xl">{{ daha.davaAdi }}</h1>
              <div class="gradientLine mb-4"></div>
              <p class="">{{ daha.dava }}</p>
            </div>
          </div> -->
          <div class="Accordion w-full myCard pb-20">
            <AccordionApp
              class="w-full"
              :title="myData.kategori"
              subtitle="Hangi Davalar Var ?"
            >
              <template #detail>
                <AccordionDetail
                  v-for="dava in myData.davalar"
                  :key="dava.id"
                  :title="dava.davaAdi"
                  :answer="dava.dava"
                  class="w-full"
                >
                </AccordionDetail>
              </template>
            </AccordionApp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/Avukat/HeaderApp.vue";
import Avukat from "@/components/data.json";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import AccordionApp from "../Accordion/AccordionApp.vue";
import AccordionDetail from "../Accordion/AccordionDetail.vue";
export default {
  setup() {
    const avukatlar = ref(Avukat);

    const route = useRoute();

    const { slug } = route.params;

    const myData = ref({});

    onMounted(() => {
      myData.value = avukatlar.value.find((a) => a.slug === slug);
    });

    return { myData };
  },
  components: { HeaderApp, AccordionApp, AccordionDetail },
};
</script>

<style lang="css" scoped>
.myCard {
  /* background: #000000;
  background: -webkit-linear-gradient(
    0deg,
    #000000 0%,
    #e2c9af 50%,
    #ffc72c 100%
  );
  background: linear-gradient(0deg, #000000 0%, #e2c9af 50%, #ffc72c 100%); */
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #77530a,
    #ffd277,
    #77530a,
    #77530a,
    #ffd277,
    #77530a
  );
  background-size: 250%;
  background-position: left;
  color: #020201;
  position: relative;
  display: flex;
  /* align-items: center; */
  justify-content: center;

  transition-duration: 1s;
  overflow: hidden;
}
.myCard::before {
  position: absolute;
  /* content: "BUTTON"; */
  color: #ffd277;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97%;
  height: 90%;
  border-radius: 8px;
  transition-duration: 1s;
  background-color: rgba(0, 0, 0, 0.842);
  background-size: 200%;
}
</style>
