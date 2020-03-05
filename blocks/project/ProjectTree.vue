<template>
  <div v-if="data">
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
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list';

export default {
  name: 'ProjectTree',
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
      data: null,
    };
  },
  mounted() {
    this.createTree();
  },
  methods: {
    createTree() {
      if (this.tree) this.data = new Tree(this.tree);
    },
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
      console.log(params);
    },

    addNode() {
      const node = new TreeNode({ name: 'new node', isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },
  },
};
</script>

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
