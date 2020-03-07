<template>
  <div class="page">
    <ProjectToolbar />
    <div :class="[$style['content']]">
      <ProjectSidebar class="w-3/12" :tree="structure" @select="handleSetPath" />
      <div :class="[$style['main']]" class="w-9/12">
        <template v-if="currentPath">
          <div :class="[$style['main__top']]" class="py-1 px-2 text-sm">
            <span class="font-semibold">Translations:</span>
            <span class="ml-2 font-thin">{{ currentPath }}</span>
          </div>
          <TranslationItem v-for="item in currentStructure" :key="item.id" :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import * as fse from 'fs-extra';
import ProjectToolbar from '../blocks/project/ProjectToolbar';
import ProjectSidebar from '../blocks/project/ProjectSidebar';
import TranslationItem from '../components/translation/TranslationItem';

import buildTree from '../utils/buildTree';

export default {
  name: 'PageProject',
  components: {
    ProjectToolbar,
    ProjectSidebar,
    TranslationItem,
  },
  data() {
    return {
      structure: null,
      files: {},
      currentPath: null,
      items: [],
    };
  },
  computed: {
    ...mapGetters({
      isProjectOpen: 'project/isProjectOpen',
      project: 'project/project',
    }),
    currentStructure() {
      if (this.items.length > 0) {
        return this.items.map(el => {
          return {
            id: el.path,
            languages: this.project.languages.map(lang => ({
              lang,
              content: _.get(this.files[lang], el.path),
            })),
          };
        });
      }
      return [];
    },
  },
  mounted() {
    if (!this.isProjectOpen) this.$router.push('/');
    else {
      this.init();
    }
  },
  methods: {
    async init() {
      this.project.files.forEach(el => {
        fse.readJSON(el.path).then(res => {
          this.files[el.lang] = res;
          if (el.lang === this.project.primary) {
            this.structure = buildTree(res);
          }
        });
      });
    },
    handleSetPath(e) {
      this.items = e.leafs;
      this.currentPath = e.path;
    },
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
