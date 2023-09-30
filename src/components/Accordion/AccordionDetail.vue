<template>
  <div
    class="py-3 hover:bg-[#e1b254] hover:rounded-md duration-300 ease-in-out px-2"
  >
    <details class="group">
      <summary
        class="flex justify-between items-center font-medium cursor-pointer list-none"
      >
        <div class="heading4 !mt-0 !mb-0 !text-black">
          {{ title }}
        </div>
        <span class="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            class="group-hover:animate-rotate"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div class="gradientLine"></div>

      <p class="edit mt-3 group-open:animate-fadeIn pl-4 leading-relaxed">
        {{ answer }}
      </p>
    </details>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title Here...",
    },
    answer: {
      type: String,
      default: "Detail Here...",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
