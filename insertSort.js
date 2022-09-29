
// 插入排序
function insertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let target = arr[j];
        while (j > 0 && arr[j - 1] > target) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = target;
    }
    return arr;
}

const arr = [5, 3, 7, 2, 8, 1, 9, 0, 4, 6]
console.log(insertSort(arr));