function Node(data) {
  this.next = null;
  this.data = data;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.add = function (data) {
  const node = new Node(data);
  let current = this.head;
  if (current) {
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  } else {
    this.head = node;
  }
  this.length++;
  return this;
}

LinkedList.prototype.removeAt = function (index) {
  if (index > -1 && index < this.length) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = prev.next;
      }
      prev.next = current.next;
    }
    this.length--;
    current.next = null;
  }
  return this;
}

LinkedList.prototype.remove = function (data) {
  const index = this.indexOf(data);
  this.removeAt(index);
  return this;
}

LinkedList.prototype.indexOf = function (data) {
  let current = this.head;
  let index = 0;
  while (current) {
    if (current.data === data) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
}

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev, tmp;
  while (current) {
    tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  this.head = prev;
  return this;
}

LinkedList.prototype.toString = function () {
  let current = this.head;
  let string = '';
  while (current) {
    string += current.data;
    current = current.next;
  }
  return string;
}

const linkedList = new LinkedList();
linkedList.add(1).add(2).add(3).add(4).add(5).add(6).add(7);
console.log(linkedList.toString());
linkedList.reverse();
console.log(linkedList.toString());
linkedList.remove(2);
console.log(linkedList.toString());
linkedList.reverse();
console.log(linkedList.toString());
