<template>
  <div :class="[$style.loader, ...classes]">
    <div :class="$style.loader__inner">
      <svg :class="$style.loader__circle" viewBox="25 25 50 50">
        <circle
          :class="$style.loader__path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="currentColor"
          stroke-width="6"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VLoaderRing',
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
      validation: value =>
        ['primary', 'danger', 'warning', 'success', 'info', 'white', 'black'].includes(value),
    },
    size: {
      type: String,
      required: false,
      default: 'regular',
      validation: value => ['regular', 'l', 'xl'].includes(value),
    },
  },
  computed: {
    classes() {
      return [`loader--color-${this.color}`, `loader--size-${this.size}`];
    },
  },
};
</script>

<style lang="scss" module>
.loader {
  width: 1em;
  height: 1em;

  &__inner {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  &__circle {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
  }

  &__path {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>
