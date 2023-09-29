<template>
  <div class="text-gray-700 my-2">
    <label class="block mb-1 font-medium text-base" :for="match">{{
      label
    }}</label>
    <input
      class="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-lg focus:shadow-outline"
      type="text"
      placeholder="Regular input"
      :id="match"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "CostumInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    match: {
      type: [String, Number],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "0",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
