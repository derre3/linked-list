function linkedList() {
  const list = {
    head: null,
    tail: null,
    size: 0,
  };

  const getHead = () => list.head;
  const getTail = () => list.tail;
  const getSize = () => list.size;

  const append = (value) => {
    const node = createNode(value);
    if (list.size === 0) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
    list.size += 1;
    node.index = list.size;
  };

  const prepend = (value) => {
    const node = createNode(value);
    if (list.size === 0) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head = node;
    }
    list.size += 1;
    resetIndex();
  };

  const resetIndex = () => {
    let node = list.head;
    for (let i = 1; i <= list.size; i++) {
      node.index = i;
      node = node.next;
    }
  };

  const at = (index) => {
    let node = list.head;
    for (let i = 1; i < index; i++) {
      node = node.next;
    }
    return node;
  };

  const pop = () => {
    let node = at(list.size - 1);
    list.tail = node;
    node.next = null;
  };

  const contains = (value) => {
    let node = list.head;
    for (let i = 1; i < list.size; i++) {
      if (node.data === value) return true;
      node = node.next;
    }
    return false;
  };

  return { append, prepend, getHead, getTail, getSize, at, pop, contains };
}

function createNode(data = null, index = null, next = null) {
  return { data, index, next };
}

const list = linkedList();
list.append('b');
list.append('c');
list.append('d');
list.prepend('a');
console.log(list.getSize());
console.log(list.getTail().index);
