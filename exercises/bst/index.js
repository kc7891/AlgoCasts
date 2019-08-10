// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor ( value ) {
    this.data = value
    this.left = undefined
    this.right = undefined
  }

  insert( value ) {
    if ( value === this.data ) return
    const insertTarget = this.data > value ? 'left' : 'right'

    this[insertTarget]
      ? this[insertTarget].insert(value)
      : this[insertTarget] = new Node(value)

  }

  contains( value ) {
    if ( value === this.data ) return this
    const searchTarget = this.data > value ? 'left' : 'right'

    return this[searchTarget]
      ? this[searchTarget].contains(value)
      : null
  }
}

module.exports = Node;
