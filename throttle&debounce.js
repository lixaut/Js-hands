
// 防抖
function debounce(func, delay) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay)
  }
}

// 节流
function throttle(func, delay) {
  let valid = true;
  return function() {
    if (valid) {
      setTimeout(() => {
        func.apply(this, arguments);
        valid = true;
      }, delay)
      valid = false;
    }
  }
}

// test1
const D = debounce(b => console.log(b), 1000)
D(1)
D(2)
D(3)
D(4)

// test2
const button = document.getElementsByTagName('button')[0]
button.style.width = '100px'
button.style.height = '50px'
let number = 0
button.innerText = number;
button.onclick = throttle(() => {
  number += 1;
  button.innerText = number;
}, 1000)