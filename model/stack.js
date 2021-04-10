class Stack {
    constructor(size) {
        this.size = size;
        this.stack = [];
    }
    push(num) {
        // Checking for stack overflow
        if (this.stack.length >= this.size)
            return false;

        this.stack.push(num);
        return true;
    }
    pop() {
        // Check if stack is empty
        if (this.stack.length == 0)
            return null;

        var poppedItem = this.stack[this.stack.length - 1];
        this.stack.pop();
        return poppedItem;
    }
    display() {
        return this.stack;
    }
}

module.exports = Stack;