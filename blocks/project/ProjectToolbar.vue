<template>
  <div :class="[$style['toolbar']]" class="p-3 bg-gray-800">
    <div class="w-3/12">
      <CToolbarButton icon="solid/folder-open" class="mr-3">
        Open project
      </CToolbarButton>
      <CToolbarButton icon="regular/save">
        Save
      </CToolbarButton>
    </div>
    <div class="w-3/12">
      <CToolbarButton icon="solid/plus-square" class="mr-3">
        Add ID
      </CToolbarButton>
      <CToolbarButton icon="solid/minus-square">
        Remove ID
      </CToolbarButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectToolbar',
};
</script>

<style lang="scss" module>
.toolbar {
  display: flex;
}
</style>
