import Node from './node';

class BinarySearchTree {
    constructor () {
        this.root = null;
        this.inorderArr = [];
        this.preorderArr = [];
        this.postorderArr = [];
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

    getMinNode = node => {
        return !node.left ? node : this.getMinNode(node.left)
    }

    getMaxNode = node => {
        return node.right === null ? node : this.getMaxNode(node.right)
    }

    inorderTraversal = node => {
        if(node !== null) {
            this.inorderTraversal(node.left);
            this.inorderArr.push(node.data);
            this.inorderTraversal(node.right);
        }
        return this.inorderArr;
    }

    preorderTraversal = node => {
        if(node !== null) {
            this.preorderArr.push(node.data);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
        return this.inorderArr;
    }

    postorderTraversal = node => {
        if(node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            this.postorderArr.push(node.data);
        }
        return this.inorderArr;
    }
}
