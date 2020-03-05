<template>
  <div :class="[$style['wrapper']]" class="flex justify-center items-center">
    <CButton icon="solid/plus" @click="$modal.show('new-project')">New project</CButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageHome',
  computed: {
    ...mapGetters({
      isProjectOpen: 'project/isProjectOpen',
    }),
  },
  mounted() {
    if (this.isProjectOpen) this.$router.push('/project');
  },
};
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}
</style>
