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
      return true;
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
  find(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    } // end of while
    return false;
  }
}
// test examples
const bst = new BinarySearchTree();
console.log(`5 found: ${bst.find(5)}`);
bst.insert(15);
bst.insert(55);
bst.insert(5);
bst.insert(10);
console.dir(bst);
console.log(`15 found: ${bst.find(15)}`);
console.log(`85 found: ${bst.find(85)}`);
console.log(`5 found: ${bst.find(5)}`);
