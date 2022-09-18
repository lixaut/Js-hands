
// 函数compose

function compose(...fns) {
  return (...args) => fns.reduceRight((acc, cur) => cur(acc), ...args);
}

function a(msg) {
  return msg + 'a';
}
function b(msg) {
  return msg + 'b';
}
function c(msg) {
  return msg + 'c';
}

const res = compose(a, b, c);
console.log(res('hello'));