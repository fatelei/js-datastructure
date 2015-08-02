/**
 * Heap
 */

'use strict';

class Heap {
  /**
   * Constructor function.
   * @param {Array} array
   */
  constructor(array) {
    this.length = array.length;
    this.array = new Array(this.length + 1);
    for (let i = 1; i <= this.length; i++) {
      this.array[i] = array[i - 1];
    }
  }

  /**
   * Sort array using heap sort algorithm, which return a sorted array.
   * @param {boolean} desc {From big to small or from small to big}
   */
  heapSort(desc) {
    if (desc) {
      this.buildMaxHeap();
    } else {
      this.buildMinHeap();
    }

    let size = this.length;
    let i;
    let count = 0;
    let rst = new Array(size);

    for (i = size; i >= 1; i--) {
      let tmp = this.array[1];
      this.array[1] = this.array[i];
      rst[count++] = tmp;

      if (desc) {
        this.adjustMaxHeap(1, i - 1);
      } else {
        this.adjustMinHeap(1, i - 1);
      }
    }

    return rst;
  }

  /**
   * Adjust max heap.
   * @param {int} index {Current root point}
   * @param {int} size  {The size of heap}
   */
  adjustMaxHeap(index, size) {
    let left = 2 * index;
    let right = 2 * index + 1;
    let max = index;

    if (left <= size && this.array[index] < this.array[left]) {
      max = left;
    }

    if (right <= size && this.array[max] < this.array[right]) {
      max = right;
    }

    if (max != index) {
      let tmp = this.array[index];
      this.array[index] = this.array[max];
      this.array[max] = tmp;
      this.adjustMaxHeap(max, size);
    }
  }

  /**
   * Adjust min heap.
   * @param {int} index {Current root point}
   * @param {int} size  {The size of heap}
   */
  adjustMinHeap(index, size) {
    let left = 2 * index;
    let right = 2 * index + 1;
    let min = index;

    if (left <= size && this.array[index] > this.array[left]) {
      min = left;
    }

    if (right <= size && this.array[min] > this.array[right]) {
      min = right;
    }

    if (min != index) {
      let tmp = this.array[index];
      this.array[index] = this.array[min];
      this.array[min] = tmp;
      this.adjustMinHeap(min, size);
    }
  }

  /**
   * Build a max heap.
   */
  buildMaxHeap() {
    let i;
    let func = null;
    let size = this.length;
    let start = parseInt(size/2, 10);

    for (i = start; i >= 1; i--) {
      this.adjustMaxHeap(i, size);
    }
  }

  /**
   * Build a min heap.
   */
  buildMinHeap() {
    let i;
    let func = null;
    let size = this.length;
    let start = parseInt(size/2, 10);

    for (i = start; i >= 1; i--) {
      this.adjustMinHeap(i, size);
    }
  }
}

module.exports = Heap;
