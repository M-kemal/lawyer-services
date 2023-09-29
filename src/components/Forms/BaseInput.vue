<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :for="label">
    {{ label }}
  </label>
  <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :id="label"
    :placeholder="label"
    :value="modelValue"
    @input="updateModelValue"
    :type="type"
    v-bind="$attrs"
  />
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValueProp: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const modelValue = ref(props.modelValueProp);

    const updateModelValue = (event) => {
      modelValue.value = event.target.value;
      emit("update:modelValue", modelValue.value);
    };

    return { modelValue, updateModelValue };
  },
};
</script>
