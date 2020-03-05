<template>
  <div class="page">
    <ProjectToolbar />
    <div :class="[$style['content']]">
      <ProjectSidebar class="w-3/12" />
      <div :class="[$style['main']]" class="w-9/12">
        <div :class="[$style['main__top']]" class="py-1 px-2 text-sm">
          <span class="font-semibold">Translations:</span>
          <span class="ml-2 font-thin">path.to.translation</span>
        </div>
        <TranslationItem />
        <TranslationItem />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectToolbar from '../../blocks/project/ProjectToolbar';
import ProjectSidebar from '../../blocks/project/ProjectSidebar';
import TranslationItem from '../components/translation/TranslationItem';

export default {
  name: 'PageProject',
  components: {
    ProjectToolbar,
    ProjectSidebar,
    TranslationItem,
  },
  computed: {
    ...mapGetters({
      isProjectOpen: 'project/isProjectOpen',
    }),
  },
  mounted() {
    if (!this.isProjectOpen) this.$router.push('/');
  },
};
</script>

<style lang="scss" module>
.content {
  flex-grow: 1;
  display: flex;
}

.main {
  &__top {
    @apply bg-gray-800;
    border-left: 1px solid theme('colors.gray.900');
    border-top: 1px solid theme('colors.gray.900');
  }
}
</style>
