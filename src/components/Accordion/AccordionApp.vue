<template>
  <div class="max-w-screen-xl mx-auto px-5 min-h-sceen">
    <div class="flex flex-col items-center">
      <h2 class="heading1 !mb-0 mt-5 !text-black">{{ title }}</h2>
      <p class="text-neutral-500 text-2xl mt-6 font-semibold font-header">
        {{ subtitle }}
      </p>
    </div>
    <div class="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-8">
      <slot name="detail" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "FAQ",
    },
    subtitle: {
      type: String,
      default: "Frequenty asked questions",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
