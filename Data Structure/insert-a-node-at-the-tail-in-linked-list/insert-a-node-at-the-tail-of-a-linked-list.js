/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  if (head === null) return new SinglyLinkedListNode(data);
  let temp = head;
  while (temp.next) {
    temp = temp.next;
  }

  temp.next = new SinglyLinkedListNode(data);

  return head;
}
