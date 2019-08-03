import Node from "./node";

class Linkedlist {
    constructor () {
        this.head = null;
    }

    addAtBeginning = val => {
        const node = new Node(val);
        if(!this.head) {
            this.head = node
        } else {
            let current = this.head;
            this.head = node;
            this.head.next = current;
        }
    }

    removeFromBeginning = () => {
        if(!this.head) {
            return 'Linked list is empty'
        } else {
            let current = this.head;
            this.head = current.next;
        }
    }

    addAtEnd = val => {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeFromEnd = () => {
        if(!this.head) {
            return 'Linked list is empty'
        } else {
            let previous;
            let current = this.head;
            while(current.next) {
                previous = current;
                current = current.next
            }
            previous.next = null
        }
    }
}