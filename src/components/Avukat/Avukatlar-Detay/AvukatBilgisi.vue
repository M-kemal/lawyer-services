<template>
  <div>
    <h2>Deneyim Detayları</h2>
    <p>Telefon: {{ avukat.details.tel }}</p>
    <p>Adres: {{ avukat.details.adres }}</p>
    <p>Hakkında: {{ avukat.details.hakkında }}</p>
    <p>{{ avukat }}</p>
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
