/**
 * Queue
 */

'use strict';

class CircularQueue {
  /**
   * Constructor function.
   * @param {int} size {The size of queue}
   */
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
  }

  /**
   * Add a item to queue.
   */
  enqueue(x) {
    let size = this.size;
    let head = this.head;
    let tail = this.tail;

    if ((tail + 1) % size === head) {
      throw new Error('Queue is full');
    }

    this.queue[tail] = x;
    this.tail = (tail + 1) % size;
  }

  /**
   * Pop a item from queue.
   */
  dequeue() {
    let head = this.head;
    if (head === this.tail) {
      throw new Error('Queue is empty');
    }

    let x = this.queue[head];
    this.head = (head + 1) % this.size;
    return x;
  }

  /**
   * Get current size of a queue.
   */
  queueLength() {
    let head = this.head;
    let tail = this.tail;
    let size = this.size;

    return (tail - head + size) % size;
  }
}

module.exports = CircularQueue;
