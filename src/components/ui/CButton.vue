<template>
  <component
    :is="component"
    :to="to"
    :class="[$style.button, ...classes]"
    class="py-3 px-4 rounded-sm"
    v-bind="$attrs"
    :disabled="isDisabled && !isLink"
    :type="component === 'button' ? type : null"
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
import buttonMixin from '../../mixins/buttonMixin';

export default {
  name: 'VButton',
  mixins: [buttonMixin],
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
