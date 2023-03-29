// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
};
