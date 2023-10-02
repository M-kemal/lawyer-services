<template>
  <div>
    <ul>
      <li v-for="avukat in avukatlar" :key="avukat.slug">
        <router-link
          :to="{ name: 'AvukatBilgisi', params: { slug: avukat.slug } }"
        >
          {{ avukat.name }} - {{ avukat.job }}
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
};
</script>

<style></style>
