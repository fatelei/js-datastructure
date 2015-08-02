/**
 * Test stack.
 */

'use strict';

var Heap = require('../index').Heap;

describe("Test Heap datastructure", function () {
  var heap;

  beforeEach(function () {
    heap = new Heap([2, 1, 3, 4, 5]);
  });

  describe("build a max heap", function () {
    it("the max value should be 5", function () {
      heap.buildMaxHeap();
      expect(heap.array[1]).toBe(5);
    });
  });

  describe("build a min heap", function () {
    it("the min value should be 1", function () {
      heap.buildMinHeap();
      expect(heap.array[1]).toBe(1);
    });
  });

  describe("heap sort from min to max", function () {
    it("the order should be from min to max", function () {
      var rst = heap.heapSort(false);
      for (let i = 0; i < rst.length; i++) {
        expect(rst[i]).toBe(i+1);
      }
    });
  });

  describe("heap sort from max to min", function () {
    it("the order should be from max to min", function () {
      var rst = heap.heapSort(true);
      expect(rst[0]).toBe(5);
      expect(rst[1]).toBe(4);
      expect(rst[2]).toBe(3);
      expect(rst[3]).toBe(2);
      expect(rst[4]).toBe(1);
    });
  });
});
