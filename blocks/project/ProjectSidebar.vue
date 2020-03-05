<template>
  <div :class="[$style['sidebar']]" class="bg-gray-800 p-3">
    Sidebar
  </div>
</template>

<script>
export default {
  name: 'ProjectSidebar',
};
</script>

<style lang="scss" module>
.sidebar {
  border-top: 1px solid theme('colors.gray.900');
}
</style>
