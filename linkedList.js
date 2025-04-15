function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

let list1 = arrayToLinkedList([1, 2, 4]);
let list2 = arrayToLinkedList([1, 3, 4]);

let dummy = new ListNode();
let cur = dummy;

console.log("Initial state:");
console.log("List1:", JSON.stringify(list1));
console.log("List2:", JSON.stringify(list2));

while (list1 && list2) {
  console.log("\nCurrent List1 Node Value:", list1.val);
  console.log("Current List2 Node Value:", list2.val);

  if (list1.val > list2.val) {
    console.log("List2 value is smaller, attaching List2 node to merged list.");
    cur.next = list2;
    list2 = list2.next;
  } else {
    console.log(
      "List1 value is smaller or equal, attaching List1 node to merged list."
    );
    cur.next = list1;
    list1 = list1.next;
  }

  cur = cur.next;
  console.log("Merged list now looks like:", JSON.stringify(dummy.next));
  console.log("Next List1:", list1 ? JSON.stringify(list1) : "null");
  console.log("Next List2:", list2 ? JSON.stringify(list2) : "null");
}

console.log("\nOne of the lists is now null. Attaching the remaining list.");
cur.next = list1 || list2;

console.log("Final merged list:", JSON.stringify(dummy.next));
