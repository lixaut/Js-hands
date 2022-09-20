
// 用栈实现队列
function Queue(nums) {
  this.stack = nums || [];
  this.helperStack = [];
}

Queue.prototype.push = function (ele) {
  let cur = null;
  while ((cur = this.stack.pop())) {
    this.helperStack.push(cur);
  }

  this.helperStack.push(ele);

  while ((cur = this.helperStack.pop())) {
    this.stack.push(cur);
  }
};

Queue.prototype.pop = function () {
  return this.stack.pop();
};

// test
const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
