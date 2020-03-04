<template>
  <Multiselect
    v-model="innerValue"
    :options="options"
    track-by="id"
    label="value"
    :placeholder="placeholder"
    :show-labels="null"
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'CSelect',
  props: {
    value: {
      type: Object,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
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
};
</script>

<style lang="scss" module></style>
