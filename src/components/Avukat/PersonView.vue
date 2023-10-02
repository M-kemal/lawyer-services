<template>
  <section>
    <div v-if="experience" class="flex flex-col">
      <h1>{{ experience.name }} WW</h1>
      <img :src="experience.img" :alt="experience.name" />
      <p>{{ experience.hakkında }}</p>
    </div>
    <div v-else>
      <p>Experience not found</p>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import sourceData from "@/components/person.json";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const experience = ref(null);

    const findExperience = computed(() => {
      return sourceData.destinations
        .find((destination) => destination.id === props.id)
        ?.experiences.find(
          (experience) => experience.slug === props.experienceSlug
        );
    });

    onMounted(() => {
      // Find the experience when the component is mounted
      experience.value = findExperience.value;
    });

    return {
      experience,
    };
  },
};
</script>

<style lang="scss" scoped></style>
