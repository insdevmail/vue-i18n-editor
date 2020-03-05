<template>
  <div :class="[$style['sidebar']]" class="bg-gray-800 p-3">
    <ProjectTree />
  </div>
</template>

<script>
import ProjectTree from './ProjectTree';

export default {
  name: 'ProjectSidebar',
  components: {
    ProjectTree,
  },
};
</script>

<style lang="scss" module>
.sidebar {
  border-top: 1px solid theme('colors.gray.900');
}
</style>
