<template>
  <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
    <div class="flex flex-col items-center">
      <h2 class="heading1 !mb-0 mt-5">FAQ</h2>
      <p class="text-neutral-500 text-xl mt-3">Frequenty asked questions</p>
    </div>
    <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
      <slot name="detail" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
