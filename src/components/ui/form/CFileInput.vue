<template>
  <div :class="[$style['file']]">
    <CButton :icon="icon">
      <label :class="[$style['file__label']]">
        <input
          :class="[$style['file__input']]"
          type="file"
          :name="name"
          :accept="accept"
          @change="handleFileChange"
        />
      </label>
      <slot>Upload file</slot>
    </CButton>
  </div>
</template>

<script>
export default {
  name: 'CFileInput',
  props: {
    icon: {
      type: String,
      default: 'solid/file',
    },
    name: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleFileChange(e) {
      this.$emit('change', e.target.files?.[0]);
    },
  },
};
</script>

<style lang="scss" module>
.file {
  display: block;

  &__label {
    position: absolute 0;
    cursor: pointer;
  }

  &__input {
    display: none;
  }
}
</style>
