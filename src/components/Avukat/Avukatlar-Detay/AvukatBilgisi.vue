<template>
  <div class="myCard">
    <div class="flex items-start justify-center p-6 h-[30rem]">
      <img
        :src="require(`../../../assets/${avukat.img}.jpeg`)"
        :alt="avukat.name"
        class="w-full h-full object-cover mr-4 shadow rounded-md"
      />

      <div
        v-for="avk in avukat.details"
        :key="avk.id"
        class="flex flex-col justify-center items-start"
      >
        <h1 class="heading1 !text-black">Av.{{ avk.name }}</h1>
        <div class="text-base">
          <span class="heading4 !mb-1 !text-black !font-semibold">Tel :</span>
          <span>{{ avk.tel }}</span>
        </div>
        <div class="text-base">
          <span class="heading4 mr-1 !mb-1 !text-black !font-semibold"
            >Mail :</span
          >
          <span>{{ avk.mail }}</span>
        </div>
        <div class="text-base">
          <span class="heading4 mr-1 !mb-1 !text-black !font-semibold"
            >Adres :</span
          >
          <span>{{ avk.adres }}</span>
        </div>
        <div class="leading-relaxed text-base">
          <span class="heading4 mr-1 !mb-1 !text-black !font-semibold"
            >Hakkında :</span
          >
          <span>{{ avk.hakkında }}</span>
        </div>
        <!-- <p>{{ avukat }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import jsonData from "@/components/person.json";

export default {
  name: "AvukatBilgisi",
  props: ["slug"],
  setup(props) {
    const avukat = ref(
      jsonData.avukatlar.find((avk) => avk.slug === props.slug)
    );

    return {
      avukat,
    };
  },
};
</script>

<style>
.myCard {
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
