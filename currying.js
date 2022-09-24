
// 函数柯里化
function curry(fn) {
  const context = this;
  function inner(...args) {
    if (args.length === fn.length) return fn.call(context, ...args);
    return (...innerArgs) => inner.call(context, ...args, ...innerArgs);
  }
  return inner;
}

// 解法二
function curry2(fn) {
  function inner(...args) {
    if (args.length >= fn.length) return fn(...args)
    return (...innerArgs) => inner(...args, ...innerArgs)
  }
  return inner;
}

// 解法三 带有占位符的curry
function curry3(fn) {
  function inner(...args) {
    const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder);
    if (complete) return fn.apply(this, args);
    return (...newArgs) => {
      const res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg);
      return inner(...res, ...newArgs);
    }
  }
  return inner;
}
curry.placeholder = Symbol()

// test
function test(a, b, c) {
  console.log(a, b, c);
}

curry(test)(1)(2)(3);

// 执行步骤
/*
  1. curry(test)(1)(2)(3)
  2. inner(1)(2)(3)
  3. ((...innerArgs) => inner.call(context, 1, innerArgs))(2)(3)
  4. inner.call(context, 1, 2)(3)
  5. inner(1, 2)(3)
  6. inner.call(context, 1, 2, 3)
  7. inner(1, 2, 3)
  8. fn(1, 2, 3)
*/
