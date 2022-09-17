// 函数柯里化
function curry(fn) {
  const context = this;
  function inner(...args) {
    if (args.length === fn.length) return fn.call(context, ...args);
    return (...innerArgs) => inner.call(context, ...args, ...innerArgs);
  }
  return inner;
}

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
