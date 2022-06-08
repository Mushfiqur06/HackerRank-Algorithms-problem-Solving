/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if(!head) return head = newNode;
  newNode.next = head;
  head = newNode;

  return head
}
