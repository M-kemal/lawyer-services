<template>
  <div class="mb-6 flex-grow w-96">
    <label
      :for="match"
      :style="{ color: labelColor }"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-[rgb(30,41,59)]"
      >{{ label }}</label
    >
    <!-- <p>{{ value }}</p> -->

    <textarea
      :id="match"
      :rows="rows"
      :placeholder="placeholder"
      @input="$emit('update:value', $event.target.value)"
      :value="value"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[rgb(98,123,164)] dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    match: {
      type: String,
      default: "area",
    },
    label: {
      type: String,
      default: "Your message",
    },
    rows: {
      type: String,
      default: "3",
    },
    placeholder: {
      type: String,
      default: "Type here...",
    },
    value: {
      type: String,
      default: "",
    },
    labelColor: {
      type: [String, Number],
      default: "black",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
