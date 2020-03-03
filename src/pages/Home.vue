<template>
  <div :class="[$style['wrapper']]" class="flex justify-center items-center">
    <CButton icon="solid/plus">Create project</CButton>
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
