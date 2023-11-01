function linkedList() {
  const list = {
    head: null,
    tail: null,
    size: 0,
  };

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
  };

  const getHead = () => list.head;
  const getTail = () => list.tail;
  const getSize = () => list.size;

  return { append, prepend, getHead, getTail, getSize };
}

function createNode(data = null, next = null) {
  return { data, next };
}

const list = linkedList();
list.append('b');
list.append('c');
list.append('d');
list.prepend('a');
