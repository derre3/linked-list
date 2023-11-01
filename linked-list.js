function linkedList() {
  const list = {
    head: null,
    tail: null,
    size: null,
  };

  const append = (value) => {
    const node = createNode(value);
    if (list.size === null) {
      list.head = node;
      list.tail = node;
      list.size = 0;
    } else {
      list.tail.next = node;
      list.tail = node;
      list.size += 1;
    }
  };

  const head = () => list.head;
  const tail = () => list.tail;
  const size = () => list.size;

  return { append, head, tail, size };
}

function createNode(data = null, next = null) {
  return { data, next };
}

const list = linkedList();
list.append('a');
list.append('b');
list.append('c');
console.log(list.head().data);
console.log(list.head().next.data);
console.log(list.tail().data);
