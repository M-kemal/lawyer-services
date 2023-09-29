<template>
  <div v-if="!isCheck" class="mb-6 flex-grow w-96">
    <label
      :for="match"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-[rgb(30,41,59)] first-letter:capitalize"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="match"
      :placeholder="placeholder"
      :value="value"
      v-bind="$attrs"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-text-[rgb(30,41,59)] focus:border-text-[rgb(30,41,59)] block w-full p-2.5 dark:bg-[rgb(30,41,59)] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[rgb(98,123,164)] dark:focus:ring-text-[rgb(30,41,59)] dark:focus:border-text-[rgb(30,41,59)]"
    />
  </div>
  <div v-if="isCheck === 'checkbox'" class="flex items-center h-5">
    <input
      :id="match"
      :type="isCheck"
      value=""
      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      required
    />
    <label
      :for="match"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
      >I agree with the
      <a :href="href" class="text-blue-600 hover:underline dark:text-blue-500"
        >terms and conditions</a
      ></label
    >
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    match: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Type here",
    },
    value: {
      default: "",
    },
    type: {
      type: String,
      default: "Text",
    },
    isCheck: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
