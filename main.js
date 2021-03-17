class Stack {
    constructor(){
        this.count = 0;
        this.storage = {};
        this.removing = "";
    }

    push(item) {
        this.storage[this.count] = item;
        this.count++;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    pop() {
        this.removing = this.storage[this.count - 1];

        delete this.storage[this.count - 1];
        this.count--;

        return this.removing;
    }

    size() {
        return this.count;
    }
}


module.exports = Stack;