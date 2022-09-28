
// 数组扁平化
// 1. 递归实现
function flatten(arr) {
    if (!arr.length) return;
    return arr.reduce((acc, cur) => {
        return Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur];
    }, []);
}

// 2. 迭代实现
function flatten2(arr) {
    if (!arr.length) return arr;
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// test
const arr = [1, 2, [2, 3, [4, 5], 5, [1, 3]], 2, 4]
console.log(flatten2(arr))
console.log(flatten(arr))