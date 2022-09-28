
// 手写call
/*
    功能特点：
    1. 可以改变当前函数的this指向
    2. 让当前函数执行
    3. 接受的是一个参数列表
*/
Function.prototype.myCall = function (ctx, ...args) {
  let fn = Symbol();
  let context = ctx ? Object(ctx) : window;
  context.fn = this;
  let res = args.length ? context.fn(...args) : context.fn();
  delete context.fn;
  return res;
};


// 手写apply
/*  
    功能特点：
    1. 可以改变当前函数this指向
    2. 让当前函数执行
    3. 接受参数为一个数组（或类数组对象）
*/
Function.prototype.myApply = function (ctx, args = []) {
  if (!Array.isArray(args)) throw new Error('apply need Array');
  let fn = Symbol();
  let context = ctx ? Object(ctx) : window;
  context.fn = this;
  let res = args.length ? context.fn(...args) : context.fn();
  delete context.fn;
  return res;
};


// 手写bind
/*
    功能特点：
    1. 可以绑定this指向
    2. 返回一个绑定后的函数
    3. 如果绑定的函数被new了，当前函数的 this 就是当前的实例
*/
Function.prototype.myBind = function (ctx, ...args) {
  let that = this;
  return function (...addArgs) {
    return that.apply(ctx, args.concat(addArgs));
  };
};

// test
const obj1 = {
  age: 10,
};

const obj2 = {
  gender: '男',
  fn: function (name) {
    console.log(`${name}的年龄是${this.age}`);
  },
};

obj2.fn.myCall(obj1, '张三');
obj2.fn.myApply(obj1, ['李四'])
const bind = obj2.fn.myBind(obj1)
bind('王五')