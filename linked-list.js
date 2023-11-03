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
  };

  const at = (targetIndex) => {
    let node = list.head;
    for (let i = 1; i < targetIndex; i++) {
      node = node.next;
    }
    return node;
  };

  const pop = () => {
    list.size -= 1;
    let node = at(list.size);
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

  const find = (value) => {
    let node = list.head;
    for (let i = 1; i <= list.size; i++) {
      if (node.data === value) return i;
      node = node.next;
    }
    return null;
  };

  const toString = () => {
    let node = list.head;
    let result = '';
    // index starts with 0 in case the list is empty,
    // skipping the loop and just returning null
    for (let i = 0; i < list.size; i++) {
      result += `( ${node.data} )  => `;
      node = node.next;
    }
    // null will be added at the end regardless
    result += '( null )';
    return result;
  };

  return {
    append,
    prepend,
    getHead,
    getTail,
    getSize,
    at,
    pop,
    contains,
    toString,
    find,
  };
}

function createNode(data = null, next = null) {
  return { data, next };
}
