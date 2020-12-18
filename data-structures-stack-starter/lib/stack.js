// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.top = newNode;
        } else {
            let oldNode = this.top;
            newNode.next = oldNode;
            this.top = newNode;
        }
        this.length++
        return this.length;
    }

    pop() {
        let currTop = this.top;
        if (this.top === null) {
            return null;
        } 
        else if (this.top.next === null) {
            this.top = null;
        } 
        else {
            this.top = this.top.next;
        } 
        this.length--
        return currTop.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
