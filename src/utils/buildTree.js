import { v4 as uuid } from 'uuid';

function buildTree(json, parent = null) {
  const tree = [];
  const keys = Object.keys(json);
  if (keys.length > 0) {
    keys.forEach(el => {
      const nested = {
        id: uuid(),
        name: el,
        dragDisabled: true,
        addTreeNodeDisabled: true,
        addLeafNodeDisabled: true,
        editNodeDisabled: true,
        delNodeDisabled: true,
        path: parent ? `${parent}.${el}` : el,
      };
      if (typeof json[el] === 'string') {
        nested.isLeaf = true;
      } else {
        nested.children = buildTree(json[el], parent ? `${parent}.${el}` : el);
      }
      tree.push(nested);
    });
  }
  return tree;
}

export default buildTree;
