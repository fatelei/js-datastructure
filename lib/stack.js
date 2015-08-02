/**
 * Stack
 */

'use strict';

class Stack {
  /**
   * Constructor
   * @param {int} size {The size of stack}
   */
  constructor(size) {
    this.stack = new Array(size);
    this.size = size;
    this.top = -1;
  }

  /**
   * Push item to stack.
   */
  push(x) {
    if (this.top === this.size) {
      throw new Error('Stack is full');
    }

    this.top += 1;
    this.stack[this.top] = x;
  }

  /**
   * Pop item from stack.
   */
  pop() {
    if (this.top < 0) {
      throw new Error('Stack is empty');
    }

    return this.stack[this.top--];
  }

  /**
   * Get top item.
   */
  getTop() {
    if (this.top >= 0) {
      return this.stack[this.top];
    }
    return -1;
  }
}

module.exports = Stack;
