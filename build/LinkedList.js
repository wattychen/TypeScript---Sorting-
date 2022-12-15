"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
        tail = tail.next;
    }
    get length() {
        if (!this.head)
            return 0;
        let current = this.head;
        let length = 1;
        while (current.next) {
            length++;
            current = current.next;
        }
        return length;
    }
    at(index) {
        if (!this.head)
            throw new Error("Index out of bounds");
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }
            else {
                count++;
                node = node.next;
            }
        }
        throw new Error("Index out of bounds");
    }
    compare(left, right) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(left).data > this.at(right).data;
    }
    swap(left, right) {
        const leftNode = this.at(left);
        const rightNode = this.at(right);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head)
            return;
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
