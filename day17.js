// Data Structures

// Linked List
// 1
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Creating individual nodes
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// Linking the nodes together
node1.next = node2;
node2.next = node3;

// node1 is now the head of the linked list: 1 -> 2 -> 3
console.log(node1);

// 2
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node from the end of the list
  remove() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      const removedNode = this.head;
      this.head = null;
      return removedNode.value;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    const removedNode = current.next;
    current.next = null;
    return removedNode.value;
  }

  // Display all nodes in the list
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += current.value + " -> ";
      current = current.next;
    }
    listValues += "null";
    console.log(listValues);
  }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 -> 2 -> 3 -> null

console.log("Removed:", list.remove()); // Output: Removed: 3
list.display(); // Output: 1 -> 2 -> null

console.log("Removed:", list.remove()); // Output: Removed: 2
list.display(); // Output: 1 -> null

console.log("Removed:", list.remove()); // Output: Removed: 1
list.display(); // Output: List is empty
