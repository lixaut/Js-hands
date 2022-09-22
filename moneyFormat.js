
// 实现千分位展示
function moneyFormat(num) {
  const res = [];
  const decimalIndex = num.indexOf('.');
  const hasDecimal = decimalIndex > -1;

  for (let i = num.length - 1; i > -1; i--) {
    let cur = 1;
    while (hasDecimal && i >= decimalIndex) {
      res.unshift(num[i]);
      i--;
    }

    while (cur <= 3) {
      res.unshift(num[i]);
      i--;
      cur++;
    }

    res.unshift(',');
  }

  if (res[0] === ',') res.shift();
  return res.join('');
}

const a = moneyFormat('123452452452467.55');
console.log(a);
