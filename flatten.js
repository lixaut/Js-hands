
// 拍平数组
function flatten(list) {
  if (list.length === 0) return [];
  const head = list[0];
  if (head instanceof Array) {
    list[0] = flatten(head);
  } else {
    list[0] = [head];
  }
  return list[0].concat(flatten(list.slice(1)));
}

// 拍平数组指定深度
function flattenDepth(list, n) {
  if (list.length === 0) return [];
  if (n === 0) return list;
  const head = list[0];
  if (head instanceof Array) {
    list[0] = flattenDepth(head, n - 1);
  } else {
    list[0] = [head];
  }
  return list[0].concat(flattenDepth(list.slice(1), n));
}

// test
const arr = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
const a = flatten(arr);
const b = flattenDepth(arr, 2);
console.log(a);
console.log(b);
