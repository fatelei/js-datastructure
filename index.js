/**
 * Main entry
 */

var CircularQueue = require('./lib/circular_queue');
var Heap = require('./lib/heap');
var Stack = require('./lib/stack');

module.exports = {
  Heap: Heap,
  Stack: Stack,
  CircularQueue: CircularQueue
};
