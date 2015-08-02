/**
 * Test CircularQueue.
 */

var CircularQueue = require('../index').CircularQueue;

describe('Test CircularQueue datastructure', function () {
  it('it enqueue ok', function () {
    var cq = new CircularQueue(5);
    cq.enqueue(1);
    cq.enqueue(2);
    expect(cq.dequeue()).toBe(1);
    expect(cq.dequeue()).toBe(2);
  });

  it('when the queue is full, enqueue will fail', function () {
    var cq = new CircularQueue(5);
    cq.enqueue(1);
    cq.enqueue(2);
    cq.enqueue(3);
    cq.enqueue(4);
    expect(cq.enqueue, 5).toThrowError();
  });
});
