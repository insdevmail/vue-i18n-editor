<template>
  <div :class="[$style['wrapper']]" class="flex justify-center items-center">
    <CButton icon="solid/plus" @click="$modal.show('new-project')">New project</CButton>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
};
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}
</style>
