<template>
  <div :class="[$style['sidebar']]" class="bg-gray-800 p-3">
    <template v-if="data">
      <!--    <button @click="addNode">Add Node</button>-->
      <VueTreeList
        :model="data"
        default-tree-node-name="new node"
        default-leaf-node-name="new leaf"
        :default-expanded="false"
        drag-disabled
        @click="onClick"
        @change-name="onChangeName"
        @delete-node="onDel"
        @add-node="onAddNode"
      >
        <!--      <span slot="addTreeNodeIcon" class="icon">📂</span>-->
        <!--      <span slot="addLeafNodeIcon" class="icon">＋</span>-->
        <!--      <span slot="editNodeIcon" class="icon">📃</span>-->
        <!--      <span slot="delNodeIcon" class="icon">✂️</span>-->
        <!--      <span slot="leafNodeIcon" class="icon">🍃</span>-->
      </VueTreeList>
      <!--    <button @click="getNewTree">Get new tree</button>-->
    </template>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list';
import getLeas from '../../utils/getLeafs';

export default {
  name: 'ProjectSidebar',
  components: {
    VueTreeList,
  },
  props: {
    tree: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newTree: {},
    };
  },
  computed: {
    data() {
      if (this.tree) return new Tree(this.tree);
      return null;
    },
  },
  methods: {
    onDel(node) {
      console.log(node);
      node.remove();
    },

    onChangeName(params) {
      console.log(params);
    },

    onAddNode(params) {
      console.log(params);
    },

    onClick(params) {
      if (params.children) {
        const leafs = getLeas([], params.children);
        this.$emit('select', {
          path: params.path,
          leafs,
        });
      }
      if (params.isLeaf) {
        this.$emit('select', {
          path: params.path,
          leafs: [params],
        });
      }
    },

    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },

    getNewTree() {
      const vm = this;
      // eslint-disable-next-line
        function _dfs(oldNode) {
        const newNode = {};
        // eslint-disable-next-line
          for (const k in oldNode) {
          if (k !== 'children' && k !== 'parent') {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          // eslint-disable-next-line
            for (let i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    },
  },
};
</script>

<style lang="scss" module>
.sidebar {
  border-top: 1px solid theme('colors.gray.900');
}
</style>

<style lang="scss">
.vtl {
  .vtl-drag-disabled {
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
  .vtl-disabled {
    background-color: transparent;
  }

  &-node-main:hover {
    background-color: transparent;
  }
}
</style>

<style lang="scss" scoped>
.icon {
  &:hover {
    cursor: pointer;
  }
}
</style>
