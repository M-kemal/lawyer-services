<template>
  <div>
    <h2>Deneyim Detayları</h2>
    <p>Telefon: {{ destination.experiences.tel }}</p>
    <p>Adres: {{ destination.experiences.adres }}</p>
    <p>Hakkında: {{ destination.experiences.hakkında }}</p>
    <p>{{ destination }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import jsonData from "@/components/person.json";

export default {
  name: "ExperienceDetail",
  props: ["slug"],
  setup(props) {
    const destination = ref(
      jsonData.destinations.find((dest) => dest.slug === props.slug)
    );

    return {
      destination,
    };
  },
};
</script>
