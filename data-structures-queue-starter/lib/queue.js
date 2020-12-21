// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.front = newNode;
            this.back = newNode;
        }
        //reassign the front pointer
        //set oldNode
        let oldNode = this.back; //storing the current back
        oldNode.next = newNode; //current back's new next value is the new node
        this.back = newNode; //reassign the back to the new nod
        return ++this.length;
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        //store current node of front in variable and return that value
        let currFront = this.front;
        if (this.front === this.back) {
            this.front = null;
            this.back = null;
        } else {
        //reassign front to current front.next
        this.front = this.front.next;
        }
        this.length--
        return currFront.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;