<template>
  <div v-hotkey="keymap" class="page">
    <ProjectToolbar @save="handleSave" @add="handleAdd" @remove="handleRemove" />
    <div :class="[$style['content']]">
      <ProjectSidebar class="w-3/12" :tree="structure" @select="handleSetPath" />
      <div :class="[$style['main']]" class="w-9/12">
        <template v-if="currentPath">
          <div :class="[$style['main__top']]" class="py-1 px-2 text-sm">
            <span class="font-semibold">Translations:</span>
            <span class="ml-2 font-thin">{{ currentPath }}</span>
          </div>
          <TranslationItem
            v-for="item in currentStructure"
            :key="item.id"
            :item="item"
            @input="handleInput"
          />
        </template>
      </div>
    </div>
    <PopupPath />
  </div>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import * as fse from 'fs-extra';
import ProjectToolbar from '../blocks/project/ProjectToolbar';
import ProjectSidebar from '../blocks/project/ProjectSidebar';
import TranslationItem from '../components/translation/TranslationItem';

import PopupPath from '../components/popup/PopupPath';

import buildTree from '../utils/buildTree';
import validatePath from '../utils/validatePath';

export default {
  name: 'PageProject',
  components: {
    ProjectToolbar,
    ProjectSidebar,
    TranslationItem,
    PopupPath,
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
    keymap() {
      return {
        'ctrl+s': this.handleSave,
      };
    },
  },
  mounted() {
    if (!this.isProjectOpen) {
      this.$router.push('/');
    } else {
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
    handleInput(val, lang, path) {
      _.set(this.files[lang], path, val);
    },
    handleSave() {
      Object.keys(this.files).forEach(el => {
        const { path } = this.project.files.find(file => file.lang === el);
        const content = this.files[el];
        fse.writeJson(path, content);
      });
    },
    handleAdd() {
      let path = this.currentPath;
      const primaryFile = this.files[this.project.primary];
      const content = _.get(primaryFile, path);
      if (typeof content === 'string') {
        path = path.slice(0, path.lastIndexOf('.'));
      }
      this.$modal.show('add-path', {
        path,
        validatePath: modalMath => validatePath(modalMath, primaryFile, false),
        onConfirm: newPath => {
          this.project.languages.forEach(el => {
            _.setWith(this.files[el], newPath, '', Object);
          });
          this.structure = buildTree(primaryFile);
          const name = newPath.slice(newPath.lastIndexOf('.') + 1);
          this.items.push({
            name,
            path: newPath,
          });
          if (!this.currentPath) {
            this.currentPath = newPath;
          }
        },
      });
    },
    handleRemove() {
      if (this.currentPath) {
        this.$modal.show('confirm', {
          title: 'Remove ID',
          text: `Do you want to remove id <span class="font-bold">${this.currentPath}</span>?`,
          onConfirm: () => {
            this.project.languages.forEach(el => {
              _.unset(this.files[el], this.currentPath);
              this.currentPath = null;
              this.items = [];
            });
            const primaryFile = this.files[this.project.primary];
            this.structure = buildTree(primaryFile);
            this.$modal.hide('confirm');
          },
        });
      }
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
