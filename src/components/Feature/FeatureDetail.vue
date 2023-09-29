<template>
  <div class="p-2 sm:w-1/2 w-full">
    <router-link :to="'/hizmetlerimiz/' + slug">
      <div
        class="rounded flex p-4 h-full items-center duration-150 ease-in-out group"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          class="text-yellow-500 group-hover:animate-wiggle group-hover:text-yellow-100 duration-300 ease-in-out w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>

        <button class="btn w-full !h-20" :data-text="title">
          <span
            class="text-lg font-bold group-hover:text-yellow-100 group-hover:animate-wiggle"
          ></span>
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Text",
    },
    slug: {
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
