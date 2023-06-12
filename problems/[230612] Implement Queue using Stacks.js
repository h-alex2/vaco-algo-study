const List = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

const Node = function (value) {
  this.value = value;
  this.next = null;
};

List.prototype.add = function (x) {
  const node = new Node(x);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }

  this.size++;
};

List.prototype.deleteHead = function () {
  if (!this.head) {
    return null;
  } else {
    const headValue = this.head.value;
    this.head = this.head.next;
    this.size--;

    return headValue;
  }
};

List.prototype.getHead = function () {
  if (!this.head) {
    return null;
  } else {
    return this.head.value;
  }
};

List.prototype.getSize = function () {
  return this.size;
};

const MyQueue = function () {
  this.stack = new List();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.add(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.deleteHead();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack.getHead();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.getSize();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
