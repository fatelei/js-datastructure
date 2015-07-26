/**
 * Heap
 */

'use strict';

class Heap {
  /**
   * Constructor function.
   * @param {Array} array
   * @param {function} heapify  Heapify function, optional
   */
  constructor(array, heapify=null) {
    this.array = array;
    this.customHeapify = null;
    this.length = array.length;

    if (heapify) {
      this.customHeapify = heapify;
    }
  }

  /**
   * Sort array using heap sort algorithm, which return a sorted array.
   */
  heapSort(desc=false) {
    if (desc) {
      this.buildMaxHeap();
    } else {
      this.buildMinHeap();
    }

    let size = this.length;
    let i;

    for (i = size; i >= 1; i--) {
      let tmp = this.array[i];
      this.array[i] = this.array[1];
      this.array[1] = tmp;

      if (desc) {
        this.adjustMaxHeap(1, i - 1);
      } else {
        this.adjustMinHeap(1, i - 1);
      }
    }
  }

  adjustMaxHeap(index, size) {
    let left = 2 * index;
    let right = 2 * index + 1;
    let max = index;

    if (left <= size && this.array[index] < this.array[left]) {
      max = left;
    }

    if (right <= size && this.array[min] < this.array[right]) {
      max = right;
    }

    if (max != index) {
      let tmp = this.array[index];
      this.array[index] = this.array[max];
      this.array[max] = tmp;

      this.adjustMinHeap(max, size);
    }
  }

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

    if (this.customHeapify) {
      func = this.customHeapify.bind(this);
    }

    for (i = size/2; i >= 1; i--) {
        if (func) {
          func(i, size);
        } else {
          this.adjustMaxHeap(i, size);
        }
    }
  }

  /**
   * Build a min heap.
   */
  buildMinHeap() {
    let i;
    let func = null;
    let size = this.length;

    if (this.customHeapify) {
      func = this.customHeapify.bind(this);
    }

    for (i = size/2; i >= 1; i--) {
        if (func) {
          func(i, size);
        } else {
          this.adjustMinHeap(i, size);
        }
    }
  }
}
