type ToBst = (
  nodes: Object[],
  bst: (string | number)[],
  start?: number,
  end?: number
) => void;

/**
 * Converts a binary tree to a binary search tree
 * @param {object[]} nodes A binary array of nodes
 * @param {(string | number)[]} bst  The output bst array
 * @param {number} [start=0]
 * @param {number} end
 */
const toBst: ToBst = (nodes, bst, start = 0, end) => {
  let mid: number;
  if (start === end) {
    mid = start;
  } else {
    mid = Math.floor(start + (nodes.length - 1) / 2);
    if (end !== undefined) {
      mid = Math.floor((start + end) / 2);
    } else {
      end = nodes.length - 1;
    }
  }
  let ptr = 0;
  while (bst[ptr] !== undefined) {
    let comparison = nodes[mid].toString() > bst[ptr];
    if (Number(nodes[mid].toString()) && Number(bst[ptr])) {
      comparison = Number(nodes[mid].toString()) > Number(bst[ptr]);
    }

    if (comparison) {
      ptr = 2 * ptr + 2;
    } else {
      ptr = 2 * ptr + 1;
    }
  }
  bst[ptr] = nodes[mid].toString();
  if (start !== mid) {
    toBst(nodes, bst, start, mid - 1);
  }
  if (start !== end) {
    toBst(nodes, bst, mid + 1, end);
  }
};
/**
 * Reorder an array of binary tree nodes to a binary search tree.
 * @param {object[]} nodes A boinary array of nodes
 * @return {object[]}
 */
const toBinarySearchTree = (nodes: Object[]) => {
  const bst: (string | number)[] = [];
  toBst(nodes, bst);
  return bst;
};
export default toBinarySearchTree;
