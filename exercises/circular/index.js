// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

  let node = list.head
  const existingNodes = []

  while ( node && node.next ) {
    if ( existingNodes.includes(node) ) return true
    existingNodes.push(node)
    node = node.next
  }
  return false
}

module.exports = circular;
