<template>
  <div :class="[$style['wrapper']]" class="flex justify-center items-center">
    <CButton icon="solid/plus" @click="$modal.show('new-project')">New project</CButton>
    <PopupNewProject />
  </div>
</template>

<script>
import PopupNewProject from '../components/popup/PopupNewProject';

export default {
  name: 'PageHome',
  components: {
    PopupNewProject,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}
</style>
