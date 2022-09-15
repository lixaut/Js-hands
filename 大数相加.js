/*
  大数相加
    1. 如何实现两个非常大的数字（已经超出Number范围）的加法运算
    2. 由于已经超出Number范围，因此不能用Number存，这里使用字符串存储
    3. 只需要将两个数字前面补0至相同的长度，从低位到高位相加，同时用一个变量记录进位信息即可

  知识点：
    1. 字符串转数字：字符串前面加'+'；
    2. Array.join(separator)：通过参数分隔符将数组元素连接成一个字符串；
*/

function bigNumberSum(a, b) {
  let cur = 0;
  while (cur < a.length || cur < b.length) {
    if (!a[cur]) {
      a = '0' + a;
    } else if (!b[cur]) {
      b = '0' + b;
    }
    cur++;
  }
  // console.log(a, b);

  let carried = 0;
  const res = [];
  for (let i = a.length - 1; i > -1; i--) {
    const sum = carried + +a[i] + +b[i];
    // console.log(sum);
    if (sum > 9) {
      carried = 1;
    } else {
      carried = 0;
    }
    res[i] = sum % 10;
  }

  if (carried === 1) {
    res.unshift(1);
  }

  return res.join('');
}

const res = bigNumberSum('123456789', '78932');
console.log(res);
