
// 无序数组中取给定的和
function sum(list) {
  return list.reduce((acc, cur) => acc + cur, 0);
}

function backtrack(list, res, templist, T, start) {

  if (sum(templist) === T) return res.push([...templist]);

  for (let i = start; i < list.length; i++) {
    templist.push(list[i]);
    console.log(templist);
    backtrack(list, res, templist, T, i + 1);
    templist.pop();
  }
}

function nSum(list, T) {
  const res = [];
  backtrack(list, res, [], T, 0);
  return res;
}

// test
const r = nSum([1, 3, 6, 4, 2, 7], 7);
console.log(r);