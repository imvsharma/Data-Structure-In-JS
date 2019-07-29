import Node from './node';

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insertion = val => {
        const newNode = new Node(val);
        !this.root ? this.root = newNode : this.insertNode(this.root, newNode);
    }

    insertNode = (node, newNode) => {
        if(newNode.data < node.data) {
            !node.left? node.left = newNode : this.insertNode(node.left, newNode)
        } else if(newNode.data> node.data) {
            !node.right? node.right = newNode : this.insertNode(node.right, newNode)
        }
    }
}
