
// 版本号排序方法
function versionSort(arr) {
    arr.sort((a, b) => {
        let i = 0;
        let arr1 = a.split('.');
        let arr2 = b.split('.');

        while (true) {
            let s1 = arr1[i];
            let s2 = arr2[i];
            i++;
            if (s1 === undefined || s2 === undefined) {
                return s2.length - s1.length;
            }
            if (s1 === s2) continue;
            return s2 - s1;
        }
    });
    return arr;
}

// test
const arr = ['1.3.4', '1.3.0', '4.5.1', '2.2.1', '3.0.1', '1.1.0'];
console.log(versionSort(arr));