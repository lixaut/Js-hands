
// 手写new
function _new() {
    let constructor = [].shift.call(arguments);
    if (typeof constructor !== 'function') {
        throw new Error('The first argument of new must be a function');
    }
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    let res = constructor.apply(obj, arguments);
    return res instanceof Object ? res : obj;
}

// test
function Test(name, age) {
    this.name = name;
    this.age = age;
}
Test.prototype.say = function () {
    console.log(`${this.name}今年${this.age}岁了`);
}

const a = _new(Test, '张三', 18)
console.log(a);