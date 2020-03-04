<template>
  <div :class="$style['input']">
    <input :type="type" :class="$style['input__field']" :placeholder="placeholder" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>

<style lang="scss" module>
.input {
  display: block;
  position: relative;

  &__field {
    @apply w-full py-2 px-4 bg-gray-200 text-gray-800 border-2 border-gray-500 rounded-lg;

    &:focus {
      @apply outline-none border-blue-500;
    }
  }
}
</style>
