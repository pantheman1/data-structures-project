// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //set oldNode
            let oldTail = this.tail;
            oldTail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    // *Head* Ab --> Bc --> Cd --> Dnull *Tail*
    removeTail() {
        if (!this.head) {
            return undefined;
        }
        let currHead = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            //loop through list
            let i = 0;
            while (i !== this.length - 1) {
                currHead = currHead.next;
                i++;
            }
            this.tail = currHead;
            currHead.next = null;
        }
        this.length--;
        return currHead;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
