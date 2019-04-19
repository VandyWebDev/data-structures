class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newTreeNode = new TreeNode(value);
    if (!this.root) {
      this.root = newTreeNode;
      return this;
    }
    let currentNode = this.root;
    let valueInserted = false;
    while (!valueInserted) {
      if (value === currentNode.value) {
        return valueInserted;
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newTreeNode;
          valueInserted = true;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newTreeNode;
          valueInserted = true;
        }
        currentNode = currentNode.right;
      }
    } // end of while
    return valueInserted;
  } // end of insert
}
// test examples
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(55);
bst.insert(5);
bst.insert(10);
console.dir(bst);
