
// 快速排序
function quickSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let cur = arr[len - 1];
    let left = arr.filter((v, i) => v <= cur && i !== len - 1);
    let right = arr.filter(v => v > cur);
    return [...quickSort(left), cur, ...quickSort(right)];
}

// test
const arr = [1, 9, 4, 2, 5, 7, 3, 8, 6, 0];
console.log(quickSort(arr));