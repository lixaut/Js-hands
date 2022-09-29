
// 手写实现 instanceof
function myInstanceof(left, right) {
    while (true) {
        if (left === null) {
            return false;
        }
        if (left.__proto__ === right.prototype) {
            return true;
        }
        left = left.__proto__;
    }
}

const arr = [];
const obj = {};
const fn = function () {};
const str = new String('abc')

console.log(myInstanceof(str, Object))

console.log(str instanceof Object)