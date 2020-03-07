function flatten(arr, node) {
  if (node == null) return arr;
  if (Array.isArray(node)) return node.reduce(flatten, arr);
  arr.push(node);
  return flatten(arr, node.children);
}

function getLeafs(arr, node) {
  const children = flatten(arr, node);
  return children.filter(el => el.isLeaf);
}

export default getLeafs;
