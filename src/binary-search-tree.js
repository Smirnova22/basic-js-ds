const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
 }
class BinarySearchTree {
 constructor() {
   this.root = null;
 }
 insert(data) {
  const newNode = new Node(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
}

 insertNode(node, newNode) {
   if (newNode.data < node.data) {
     if (node.left === null) {
       node.left = newNode;
     } else {
       this.insertNode(node.left, newNode);
     }
   } else {
     if (node.right === null) {
       node.right = newNode;
     } else {
       this.insertNode(node.right, newNode);
     }
   }
 }


 root() {
   return this.root;
 }

 add(data) {
   const newNode = new Node(data);
   if (this.root === null) {
     this.root = newNode;
   } else {
     this.insertNode(this.root, newNode);
   }
 }
 
 has(data) {
   return this.find(data) !== null;
 }

 find(data) {
   let currentNode = this.root;
   while (currentNode !== null) {
     if (data === currentNode.data) {
       return currentNode;
     } else if (data < currentNode.data) {
       currentNode = currentNode.left;
     } else {
       currentNode = currentNode.right;
     }
   }
   return null;
 }

 remove(data) {
   this.root = this.removeNode(this.root, data);
 }

 removeNode(node, data) {
   if (node === null) {
     return null;
   } else if (data < node.data) {
     node.left = this.removeNode(node.left, data);
     return node;
   } else if (data > node.data) {
     node.right = this.removeNode(node.right, data);
     return node;
   } else {
     if (node.left === null && node.right === null) {
       node = null;
       return node;
     }
     if (node.left === null) {
       node = node.right;
       return node;
     } else if (node.right === null) {
       node = node.left;
       return node;
     }
     let aux = this.findMinNode(node.right);
     node.data = aux.data;
     node.right = this.removeNode(node.right, aux.data);
     return node;
   }
 }

 findMinNode(node) {
   while (node && node.left !== null) {
     node = node.left;
   }
   return node;
 }

 min() {
   let currentNode = this.root;
   while (currentNode && currentNode.left !== null) {
     currentNode = currentNode.left;
   }
   return currentNode ? currentNode.data : null;
 }

 max() {
   let currentNode = this.root;
   while (currentNode && currentNode.right !== null) {
     currentNode = currentNode.right;
   }
   return currentNode ? currentNode.data : null;
 }
}

module.exports = {
  BinarySearchTree
};