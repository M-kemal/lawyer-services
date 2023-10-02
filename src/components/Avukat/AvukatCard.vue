<template>
  <div class="card">
    <img :src="experience.img" :alt="experience.name" />

    <span class="card__text"> {{ experience.name }} - PC </span>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
