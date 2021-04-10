const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.queueSize = 0;
  }

  get size() {
    return this.queueSize;
  }

  enqueue(element) {
    if (this.firstNode === null) {
      this.firstNode = new ListNode();
      this.firstNode.value = element;
      this.lastNode = this.firstNode;
    } else {
      const newElement = new ListNode();
      newElement.value = element;
      this.lastNode.next = newElement;
      this.lastNode = newElement;
    }
    this.queueSize++;
  }

  dequeue() {
    const prevFirstNode = this.firstNode;
    if (this.firstNode.next !== 'undefined') this.firstNode = this.firstNode.next;
    else {
      this.firstNode = null;
      this.lastNode = null;
    }
    this.queueSize--;
    return prevFirstNode.value;
  }
}

module.exports = Queue;
