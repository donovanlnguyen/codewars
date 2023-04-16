// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

var getIntersectionNode = function(headA, headB) {
    var lenA = getLen(headA);
    var lenB = getLen(headB);
    let diff = Math.abs(lenA - lenB);
  
    if (lenA > lenB) {
      while (diff--) headA = headA.next;
    } else {
      while (diff--) headB = headB.next;
    }
  
    while (headA !== headB) {
      headA = headA.next;
      headB = headB.next;
    }
  
    return headA;
  };
  
  var getLen = function (head) {
    var len = 0;
    while (head) {
      len++;
      head = head.next;
    }
    return len;
  };

  // var getIntersectionNode = function(headA, headB) {
  //   if (!headA || !headB) return null;  
  
  //   var nowA = headA;
  //   var nowB = headB;
  
  //   while (nowA !== nowB) {
  //     nowA = nowA ? nowA.next : headB;
  //     nowB = nowB ? nowB.next : headA;
  //   }
  
  //   return nowA;
  // };