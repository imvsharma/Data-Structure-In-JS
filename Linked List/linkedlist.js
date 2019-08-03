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

    length = () => {
        let len = 0;
        if(!this.length) {
            return len
        } else {
            current = this.head;
            while (current) {
                current = current.next;
                len++
            }
            return len;
        }
    }

    traverse = () => {
        let arr = [];
        if(!this.head) {
            return 'Linked list is empty';
        } else {
            let current = this.head;
            arr.push(current.value);
            while(current.next) {
                current = current.next;
                arr.push(current.value)
            }
            return arr;
        }
    }

    reverse = () => {
        const arr = this.traverse();
        var reverseArr = arr.reverse();
        let reverseLinkedList = new Linkedlist();
        for (var i=0; i< reverseArr.length; i++) {
            reverseLinkedList.addAtEnd(reverseArr[i]);
        }
        return reverseLinkedList
    }

    remove = val => {
        if(!this.head) {
            return 'Linked list is empty';
        } else {
            let current = this.head;
            if(current.value === val) {
                this.head = current.next;
            }else {
                let previous = current;
                while (current.next) {
                    if(current.value === val) {
                        previous.next = current.next;
                        break;
                    }
                    previous = current;
                    current = current.next
                }
                if(current.value === val) {
                    previous.next = null;
                }
            }
        }
    }
}