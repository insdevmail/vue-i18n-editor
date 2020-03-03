<template>
  <component
    :is="component"
    :to="to"
    :class="[$style.button, ...classes]"
    class="py-3 px-4 rounded-sm"
    v-bind="$attrs"
    :disabled="isDisabled && !isLink"
    v-on="$listeners"
    @click="handleClick"
  >
    <div
      v-if="icon"
      :class="[$style.button__icon, { [$style['button__icon--before']]: $slots.default }]"
    >
      <Icon :name="icon" />
    </div>
    <slot />
    <div
      v-if="$slots.iconAfter"
      :class="[$style['fl-button__icon'], { [$style['fl-button__icon--after']]: $slots.default }]"
    >
      <slot name="iconAfter" />
    </div>
    <div v-if="loading" :class="$style.button__loader">
      <CLoader :size="size" :color="color" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: null,
    },
    tag: {
      type: String,
      required: false,
      default: 'button',
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validation: value => ['primary', 'danger', 'warning', 'success', 'info'].includes(value),
    },
    size: {
      type: String,
      required: false,
      default: 'regular',
      validation: value => ['regular', 's', 'l', 'xl'].includes(value),
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    component() {
      if (this.to) {
        return 'router-link';
      }
      if (this.$attrs.href) {
        return 'a';
      }
      return 'button';
    },
    classes() {
      const array = [
        this.$style[`button--color-${this.color}`],
        this.$style[`button--size-${this.size}`],
      ];
      if (this.fullWidth) array.push(this.$style['button--fullwidth']);
      if (this.isLink && this.isDisabled) array.push(this.$style.disabled);
      return array;
    },
    isLink() {
      return Boolean(this.$attrs.href || this.to);
    },
    isDisabled() {
      return this.loading || this.$attrs.disabled;
    },
  },
  methods: {
    handleClick(e) {
      const { href } = this.$attrs;
      if (href && /^http(s)?:\/\//.test(href)) {
        e.preventDefault();
        window.open(href, '_blank', 'noopener noreferrer');
      }
    },
  },
};
</script>

<style module lang="scss">
.button {
  transition: color 0.4s ease-out, background-color 0.4s ease-out;
  display: inline-block;
  line-height: 1;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;

  &:focus {
    @apply shadow-outline outline-none;
  }

  &--color-primary,
  &__loader {
    @apply bg-blue-500;

    &:hover {
      @apply bg-blue-600;
    }

    &[disabled],
    &.disabled {
      @apply bg-blue-200;
    }
  }

  &__icon {
    display: inline-block;
    vertical-align: 1px;
    width: 14px;
    height: 14px;
    margin: -1px 0 0px;

    &--before {
      margin-right: 0.35em;
    }
  }

  &__loader {
    position: absolute 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[disabled],
  &.disabled {
    pointer-events: none;
  }
}
</style>
