<template>
  <button :class="buttonClasses" class="flex items-center">
    <svg
      class="w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle
        v-if="isDisabled"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="2"
        fill="transparent"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="selectedSvgPath"
      />
    </svg>
    {{ text }}
  </button>
</template>

<script>
import { computed, ref } from "vue";

export default {
  props: {
    text: {
      type: String,
      default: "button",
    },
    isPrimary: {
      default: false,
    },
    isSecondary: {
      default: false,
    },
    isSuccess: {
      default: false,
    },
    isDanger: {
      default: false,
    },
    isWarning: {
      default: false,
    },
    isInfo: {
      default: false,
    },
    isInfo2: {
      default: false,
    },
    isDark: {
      default: false,
    },
    isDisabled: {
      default: false,
    },
  },
  setup(props) {
    const selectedSvgPath = ref("");

    const setSvgPath = () => {
      const primaryPath =
        "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z";
      const secondaryPath =
        "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z";
      const successPath =
        "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5";
      const dangerPath =
        "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01";
      const warningPath =
        "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
      const infoPath =
        "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
      const info2Path =
        "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
      const darkPath =
        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
      const disabledPath = "M8 8l8 8M8 16l8-8";

      const {
        isPrimary,
        isSecondary,
        isSuccess,
        isDanger,
        isWarning,
        isInfo,
        isInfo2,
        isDark,
        isDisabled,
      } = props;

      if (isDisabled) {
        selectedSvgPath.value = disabledPath;
      } else {
        if (isDanger) {
          selectedSvgPath.value = dangerPath;
        } else if (isWarning) {
          selectedSvgPath.value = warningPath;
        } else if (isSecondary) {
          selectedSvgPath.value = secondaryPath;
        } else if (isSuccess) {
          selectedSvgPath.value = successPath;
        } else if (isPrimary) {
          selectedSvgPath.value = primaryPath;
        } else if (isInfo) {
          selectedSvgPath.value = infoPath;
        } else if (isInfo2) {
          selectedSvgPath.value = info2Path;
        } else if (isDark) {
          selectedSvgPath.value = darkPath;
        }
      }
    };

    const buttonClasses = computed(() => {
      const classes = [];
      const {
        isPrimary,
        isSecondary,
        isSuccess,
        isDanger,
        isWarning,
        isInfo,
        isInfo2,
        isDark,
        isDisabled,
      } = props;

      if (isDisabled) {
        classes.push("disabled");
        setSvgPath();
      } else {
        if (isDanger) {
          classes.push("danger");
          setSvgPath();
        } else if (isWarning) {
          classes.push("warning");
          setSvgPath();
        } else if (isSecondary) {
          classes.push("secondary");
          setSvgPath();
        } else if (isSuccess) {
          classes.push("success");
          setSvgPath();
        } else if (isPrimary) {
          classes.push("primary");
          setSvgPath();
        } else if (isInfo) {
          classes.push("info");
          setSvgPath();
        } else if (isInfo2) {
          classes.push("info2");
          setSvgPath();
        } else if (isDark) {
          classes.push("dark");
          setSvgPath();
        }
      }
      return classes;
    });

    return { buttonClasses, selectedSvgPath };
  },
};
</script>
