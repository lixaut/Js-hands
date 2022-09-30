
// 归并排序
function merge(left, right) {
    let res = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    if (i < left.length) {
        res.push(...left.slice(i));
    }

    if (j < right.length) {
        res.push(...right.slice(j));
    }

    return res;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// test
const arr = [5, 4, 6, 3, 7, 2, 8, 2, 9, 1, 0, 3];
console.log(mergeSort(arr));