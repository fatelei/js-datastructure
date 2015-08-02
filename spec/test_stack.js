/**
 * Test stack
 */

'use strict';

var Stack = require('../index').Stack;

describe("Test stack datastructure", function () {
  it("it push right item", function () {
    var stack = new Stack(5);
    stack.push(1);
    expect(stack.getTop()).toBe(1);
  });

  it("it pop right item", function () {
    var stack = new Stack(5);
    stack.push(1)
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });
});
