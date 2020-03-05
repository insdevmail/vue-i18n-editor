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
        path: parent ? `${parent}.${el}` : el,
      };
      if (typeof json[el] === 'string') {
        nested.isLeaf = true;
      } else {
        nested.children = buildTree(json[el], parent ? `${parent}.${el}` : el);
      }
      const child = nested?.children?.[0];
      if (child?.isLeaf) {
        nested.addTreeNodeDisabled = true;
      }
      tree.push(nested);
    });
  }
  return tree;
}

export default buildTree;
