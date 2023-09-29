<template>
  <section class="body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <slot name="header" />
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <slot name="detail" />
      </div>
      <slot name="button" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
