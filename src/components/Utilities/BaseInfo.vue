<template>
  <div class="baseInfo">
    <div
      class="flex items-center p-4 text-sm text-[#007e87] bg-[#cce9ea] rounded-lg dark:bg-[#cce9ea] dark:text-[#008e96]"
      role="info"
    >
      <div class="icon flex items-center">
        <slot name="icon"></slot>
      </div>

      <div class="flex flex-wrap px-4">
        <span v-if="name" class="font-bold pr-4">
          {{ infoName }}
        </span>
        <div>
          {{ infoMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "BaseInfo",
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
    const infoMessage = computed(
      () => props.message?.message ?? props.message ?? ""
    );
    const infoName = computed(
      () => props.message?.name ?? props.name ?? "Info"
    );
    return {
      infoMessage,
      infoName,
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
