<template>
  <ValidationProvider #default="{ errors }" :name="name" slim :rules="rules">
    <div :class="$style['input']">
      <input
        v-model="innerValue"
        :type="type"
        :class="$style['input__field']"
        :placeholder="placeholder"
        :name="name"
        @input="handleInput"
      />
      <div v-if="errors.length > 0" class="text-sm text-red-500 mt-1">{{ errors[0] }}</div>
    </div>
  </ValidationProvider>
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
    rules: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      innerValue: null,
    };
  },
  mounted() {
    this.innerValue = this.value;
  },
  methods: {
    handleInput() {
      this.$emit('input', this.innerValue);
    },
  },
};
</script>

<style lang="scss" module>
.input {
  display: block;
  position: relative;
  @apply mb-4 w-full;

  &__field {
    @apply w-full py-2 px-4 text-gray-800 border-2 border-gray-500 rounded-lg;

    &:focus {
      @apply outline-none border-blue-500;
    }
  }
}
</style>
