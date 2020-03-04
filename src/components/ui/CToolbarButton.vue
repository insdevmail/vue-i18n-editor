<template>
  <component
    :is="component"
    :to="to"
    :class="[$style.button, ...classes]"
    class="p-2 rounded-lg text-sm"
    v-bind="$attrs"
    :disabled="isDisabled && !isLink"
    v-on="$listeners"
    @click="handleClick"
  >
    <div v-if="icon" :class="[$style.button__icon]">
      <Icon :name="icon" />
    </div>
    <slot />
    <div v-if="loading" :class="$style.button__loader">
      <CLoader :size="size" :color="color" />
    </div>
  </component>
</template>

<script>
import buttonMixin from '../../mixins/buttonMixin';

export default {
  name: 'CToolbarButton',
  mixins: [buttonMixin],
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.button {
  transition: border-color 0.4s ease-out, background-color 0.4s ease-out;
  display: inline-block;
  line-height: 1;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  min-width: 60px;
  height: 70px;
  border-width: 2px;

  &:focus {
    @apply shadow-outline outline-none;
  }

  &--color-primary,
  &__loader {
    @apply border-blue-500;

    &:hover {
      @apply border-blue-600 bg-gray-700;
    }

    &[disabled],
    &.disabled {
      @apply border-blue-200;
    }
  }

  &__icon {
    vertical-align: 1px;
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;

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
