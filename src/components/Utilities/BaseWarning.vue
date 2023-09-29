<template>
  <div class="baseWarning">
    <div
      class="flex items-center p-4 text-sm text-yellow-600 bg-yellow-100 rounded-lg dark:bg-yellow-100 dark:text-yellow-600"
      role="warning"
    >
      <div class="icon flex items-center">
        <slot name="icon"></slot>
      </div>

      <div class="flex flex-wrap px-4">
        <span v-if="name" class="font-bold pr-4">
          {{ warningName }}
        </span>
        <div>
          {{ warningMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "BaseWarning",
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
    const warningMessage = computed(
      () => props.message?.message ?? props.message ?? ""
    );
    const warningName = computed(
      () => props.message?.name ?? props.name ?? "Info"
    );
    return {
      warningMessage,
      warningName,
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
