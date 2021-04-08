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
  Queue() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    const newElement = new ListNode(element);
    this.queue.push(newElement);
    if (this.queue.length > 1) {
      this.queue[this.queue.length - 2].next = this.queue[this.queue.length - 1];
    }
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
