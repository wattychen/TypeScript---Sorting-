class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
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

  get length(): number {
    if (!this.head) return 0;
    let current = this.head;
    let length = 1;
    while (current.next) {
      length++;
      current = current.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Index out of bounds");

    let count = 0;
    let node: Node | null = this.head;
    while (node) {
      if (count === index) {
        return node;
      } else {
        count++;
        node = node.next;
      }
    }

    throw new Error("Index out of bounds");
  }

  compare(left: number, right: number): boolean {
    if (!this.head) throw new Error("List is empty");

    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const leftNode = this.at(left);
    const rightNode = this.at(right);

    const temp = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) return;

    let current: Node | null = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
