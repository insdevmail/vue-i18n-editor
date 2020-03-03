<template>
  <svg
    v-if="icon"
    class="icon"
    :class="[className]"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="icon.attributes"
    v-html="icon.content"
  />
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    icon() {
      try {
        let icon = require(`@/assets/icons/${this.name}.svg`);
        if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
          icon = icon.default;
        }
        return icon;
      } catch {
        console.error(`Icon ${this.name} not found`);
        return null;
      }
    },

    className() {
      return `icon icon--${this.name.replace(/\//gi, '-')}`;
    },
  },
};
</script>

<style>
.icon {
  fill: currentColor;
  display: inline-block;
  width: 24px;
  height: 24px;
  max-width: 100%;
  max-height: 100%;
}
</style>
