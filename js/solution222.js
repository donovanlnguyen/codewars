// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
var isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right);
  };
  
  var helper = function (p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
    if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
    return true;
  };
 


