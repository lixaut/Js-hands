
// 加法实现
function twoSum(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  const res = a ^ b;
  const carry = (a & b) << 1;
  return twoSum(res, carry);
}

// test
const sum = twoSum(100, 234);
console.log(sum);
