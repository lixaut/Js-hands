
// 实现快排
function helper(list) {
  if (list.length <= 1) return list;

  const bigger = [];
  const smaller = [];

  const pivotIndex = Math.floor(Math.random() * list.length);
  const pivot = list[pivotIndex];

  for (let i = 0; i < list.length; i++) {
    const number = list[i];
    if (i === pivotIndex) continue;
    if (number <= pivot) {
      smaller.push(number);
    } else {
      bigger.push(number);
    }
  }

  return helper(smaller)
    .concat([pivot])
    .concat(helper(bigger));
}

function quickSort(list) {
  return helper(list)
}

// test
const l = quickSort([1, 3, 2, 9, 6, 5, 1, 0, -2, 10]);
console.log(l);