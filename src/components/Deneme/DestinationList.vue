<template>
  <div>
    <ul>
      <li v-for="destination in destinations" :key="destination.slug">
        <router-link
          :to="{ name: 'ExperienceDetail', params: { slug: destination.slug } }"
        >
          {{ destination.name }} - {{ destination.job }}
        </router-link>
      </li>
    </ul>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import jsonData from "@/components/person.json";

export default {
  name: "DestinationList",
  setup() {
    const destinations = ref(jsonData.destinations);

    // İlk slug verisini yükle
    const router = useRouter();
    const loadInitialSlug = () => {
      if (destinations.value.length > 0) {
        const firstSlug = destinations.value[0].slug;
        router.push({ name: "ExperienceDetail", params: { slug: firstSlug } });
      }
    };

    onMounted(() => {
      loadInitialSlug();
    });

    return {
      destinations,
    };
  },
};
</script>

<style></style>
