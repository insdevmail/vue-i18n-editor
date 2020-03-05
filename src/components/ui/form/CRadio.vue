<template>
  <label :class="[$style['radio'], { [$style['radio--has-content']]: $slots.default }]">
    <input
      v-model="innerValue"
      :class="$style['radio__input']"
      type="radio"
      :name="name"
      :value="value"
    />
    <span :class="[$style['radio__dot']]" />
    <span :class="[$style['radio__text']]">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'CRadio',
  model: {
    prop: 'innerValue',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('change', this.value);
      },
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
