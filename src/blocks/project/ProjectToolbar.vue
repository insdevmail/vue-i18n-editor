<template>
  <div :class="[$style['toolbar']]" class="p-3 bg-gray-800">
    <div class="w-3/12">
      <!--      <CToolbarButton icon="solid/folder-open" class="mr-3">-->
      <!--        New project-->
      <!--      </CToolbarButton>-->
      <CToolbarButton icon="regular/save" @click="$emit('save')" class="mr-3">
        Save
      </CToolbarButton>
      <CToolbarButton icon="solid/times" @click="$emit('close')">
        Close
      </CToolbarButton>
    </div>
    <div class="w-3/12">
      <CToolbarButton icon="solid/plus-square" class="mr-3" @click="$emit('add')">
        Add ID
      </CToolbarButton>
      <CToolbarButton icon="solid/minus-square" @click="$emit('remove')">
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
