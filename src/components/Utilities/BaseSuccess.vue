<template>
  <div class="baseSucces">
    <div
      class="flex items-center p-4 text-sm text-green-600 bg-green-100 rounded-lg dark:bg-green-100 dark:text-green-600"
      role="success"
      v-bind="$attrs"
    >
      <div class="icon flex items-center">
        <slot name="icon"></slot>
      </div>

      <div class="flex flex-wrap px-4">
        <span v-if="name" class="font-bold pr-4">
          {{ successName }}
        </span>
        <div>
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "BaseSuccess",
  props: {
    name: {
      type: String,
      default: "",
    },
    message: {
      required: true,
    },
  },
  setup(props) {
    const successMessage = computed(
      () => props.message?.message ?? props.message ?? ""
    );
    const successName = computed(
      () => props.message?.name ?? props.name ?? "Info"
    );
    return {
      successMessage,
      successName,
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 2rem 1fr;
}
</style>
