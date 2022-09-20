
// 判断是否为完全二叉树
function isCompleteBinaryTree(root) {
  if (root === null) return root;
  let cur = root;
  const queue = [];

  while (cur !== null) {
    queue.push(cur.left);
    queue.push(cur.right);
    cur = queue.shift();
  }

  return queue.filter(Boolean).length === 0;
}