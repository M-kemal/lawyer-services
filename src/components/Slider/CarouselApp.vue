<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigaiton -->
    <div
      v-if="navigationEnabled"
      class="navigation px-4 w-full h-full absolute flex items-center justify-center"
    >
      <div class="toggle-page-left flex flex-1">
        <i
          @click="prevSlide"
          class="fa-solid fa-chevron-left cursor-pointer flex items-center justify-center rounded-full bg-[#f9bb3f] bg-opacity-75 text-white w-10 h-10 hover:shadow hover:shadow-black ease-in-out duration-100"
        ></i>
      </div>
      <div class="toggle-page-right flex flex-1 justify-end">
        <i
          @click="nextSlide"
          class="fa-solid fa-chevron-right cursor-pointer flex items-center justify-center rounded-full bg-[#f9bb3f] bg-opacity-75 text-white w-10 h-10 hover:shadow hover:shadow-black ease-in-out duration-100"
        ></i>
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="paginationEnabled"
      class="pagination absolute bottom-6 w-full gap-4 flex items-center justify-center"
    >
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        class="cursor-pointer w-5 h-5 rounded-full bg-gray-200 bg-opacity-75 shadow shadow-black"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    // const autoPlayEnable = ref(true); //? bu şekilde kullanım yerine props ile kontrol
    const autoPlayEnable = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    // const timeoutDuration = ref(5000); //? timeout dışarıdan vermek için props ile
    const timeoutDuration = ref(
      props.timeout === undefined ? 5000 : props.timeout
    );

    const paginationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navigationEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnable.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      paginationEnabled,
      navigationEnabled,
    };
  },
};
</script>

<style scoped>
.active {
  background: #f9bb3f;
  opacity: 0.7;
}
</style>
