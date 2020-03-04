<template>
  <label :class="[$style['radio'], { [$style['radio--has-content']]: $slots.default }]">
    <input :class="$style['radio__input']" type="radio" :name="name" />
    <span :class="[$style['radio__dot']]" />
    <span :class="[$style['radio__text']]">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'CRadio',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.radio {
  display: block;
  position: relative;
  padding-right: 20px;
  min-height: 24px;

  &--has-content {
    padding-left: 30px;
  }

  &__input {
    display: none;

    &:checked {
      & + .radio__dot {
        &:before {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 100%;
          background-color: theme('colors.blue.500');
          content: '';
          top: 3px;
          left: 3px;
        }
      }
    }
  }

  &__dot {
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 2px solid theme('colors.blue.500');
  }

  &__text {
    display: block;
  }
}
</style>
