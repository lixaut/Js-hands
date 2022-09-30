
// 二分查找
function search(arr, target, start, end) {
    let targetIndex = -1;
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (start >= end) return targetIndex;

    if (arr[mid] < target) {
        return search(arr, target, mid + 1, end);
    } else {
        return search(arr, target, start, mid - 1);
    }
}

// test
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(search(arr, 4, 0, arr.length - 1));
console.log(search(arr, 7, 0, arr.length - 1));
console.log(search(arr, 1, 0, arr.length - 1));