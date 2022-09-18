
// 深拷贝
function deepCopy(o) {
  if (typeof o !== 'object') return o;
  let n;

  if (Array.isArray(o)) {
    n = new Array(o.length);
    o.forEach((v, i) => {
      n[i] = deepCopy(v);
    });
  } else if (!Array.isArray(o)) {
    n = {};
    Object.keys(o).forEach((key) => {
      n[key] = deepCopy(o[key]);
    });
  }

  return n;
}

const a = {
  name: [14, 16],
  age: 18,
  gender: {
    c: 3,
    d: 5,
  },
};

const b = deepCopy(a);
b.gender.c = 4;
console.log(a.gender.c);
console.log(a == b);
