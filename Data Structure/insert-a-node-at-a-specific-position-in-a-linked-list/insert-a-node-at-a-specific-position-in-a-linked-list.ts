

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     number data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist: SinglyLinkedListNode, data: number, position: number): SinglyLinkedListNode {
    // Write your code here
    const newNode: SinglyLinkedListNode = new SinglyLinkedListNode(data);
    let currentNode:SinglyLinkedListNode = llist;

    for(let i:number = 0; i < position - 1; i++){
        if(currentNode.next){
            currentNode = currentNode.next
        }
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
return llist;
}
