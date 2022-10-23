
<h1>手写函数</h1>

### 1. [大数相加](./bigNumberSum.js)

分析：

1. 如何实现两个非常大的数字（已经超出 Number 范围）的加法运算。
2. 由于已经超出 Number 范围，因此不能用 Number 存，这里使用字符串存储。
3. 只需要将两个数字前面补 0 至相同的长度，从低位到高位相加，同时用一个变量记录进位信息即可。

知识点：

1. 字符串转数字：字符串前面加'+'。
2. Array.join(separator)：通过参数分隔符将数组元素连接成一个字符串。

### 2. [手写 bind](./myBind.js)

分析：

1. 主要还是通过 call 来实现，通过在 Function 构造函数的 prototype 属性上绑定自定义 bind 函数。
2. 通过 this 指向被绑定的函数。

### 3. [实现加法](./twoSum.js)

分析：

1. 加法实现原理，使用`^ & <<`等运算符实现。
2. 通过`^`取得二进制的末位，通过`&和<<`取得二进制的进位，然后一次递归，直到其中一个为零，另一个即为答案。

知识点：

1. `a ^ b`：异或运算符，通过将符号两端十进制数字的二进制值逐位运算，然后返回二进制结果的十进制数字。
2. `(a & b) << 1`：与运算符，通过与的结果，加上左移一位，取得二进制的进位。
3. 运算符是对二进制数逐位进行运算，返回值位二进制结果的十进制数字。

### 4. [函数柯里化](./currying.js)

柯里化是指将一个多元函数变成一个多参数的一元函数。

分析：

1. curry(test)(1)(2)(3)
2. inner(1)(2)(3)
3. ((...innerArgs) => inner.call(context, 1, innerArgs))(2)(3)
4. inner.call(context, 1, 2)(3)
5. inner(1, 2)(3)
6. inner.call(context, 1, 2, 3)
7. inner(1, 2, 3)
8. fn(1, 2, 3)

知识点：

1. `fn.length`函数的长度就是函数定义的形参个数。

### 5. [函数 compose](./compose.js)

函数 compose 就是接受多个函数作为参数，并返回一个新的函数，新的函数会从右向左依次执行参数函数，并且上一次结果的返回值将会作为下一个函数的参数，因此被 compose 的函数应该是单元的，即只有一个参数，不然的话，会返回一个数组。

### 6. [循环有序列表查找](./find.js)

知识点：

1. 十进制数字`>> 1`，相当于除以 2，且向下取整。

### 7. [深拷贝](./deepCopy.js)

知识点：

1. `Array.isArray(o)` 判断 o 是否为数组。
2. `typeof o` 判断 o 的数据类型，数组和对象都为 object。
3. `Object.keys(0)` 返回一个数组，值为对象 o 的所有 key。

### 8. [拍平数组](./flatten.js)

知识点：

1. `Array.prototype.concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
2. `Array.prototype.splice(startIndex, deleteNumber, addItem)` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容，此方法会改变原数组。
3. `Array.prototype.slice(startIndex, endIndex)` 方法返回新数组，索引包前不包后，不改变原始数组，索引为负数时，表示倒数第几个。
4. `String.prototype.split()` 方法使用指定的分隔符字符串将一个 String 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

### 9. [根据key获取查询字符串value](./getUrlParams.js)

知识点：

1. `Array.prototype.filter()` 方法遍历每个元素，返回满足条件的元素。
2. `Array.prototype.map()` 方法将处理后的每个元素返回。

### 10. [用reduce实现map](./implementMapUsingReduce.js)

知识点：

1. `Array.prototype.reduce()` 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
2. 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。

### 11. [用栈实现队列](./implementQueueUsingStack.js)

使用一个辅助栈helperStack，在每次入栈前，栈内元素依次先出栈再入辅助栈，实现一次顺序颠倒，入队的元素再入辅助栈，然后再从辅助栈依次进栈，后入队的就到了栈低，实现“先入先出”，即队列。

### 12. [判断是否是完全二叉树](./isCompleteBinaryTree.js)

知识点：

1. Boolean：是类也是一个函数，函数使用时可以转化数据类型为布尔值，并且返回。

### 13. [给定字符串和对象，返回对应字符串字段的值](./lensProp.js)

知识点：

1. `String.prototype.split()` 方法在没有匹配到给定分隔符的时候，返回源字符串对应的数组。
2. `void 0` 表示undefined。

### 14. [判断是否成环](./hasCycle.js)

通过设置两个速度不一致的指针，如果快的能追上慢的，则表示链表成环。

### 15. [实现千分位展示](./moneyFormat.js)

小数点后的数字原位不动，小数点前的数字，每3个加上一个逗号。

知识点：

1. `Array.prototype.join()` 方法将数组元素按给定分隔符连接成一个字符串并返回。
2. `String.prototype.indexOf()` 方法即使字符串方法，也是数组方法，返回被检测元素的位置索引，没有时返回 -1。

### 16. [无序数组中取给定的和](./nSum.js)

用递归验证每新加入的那个数，不满足即去掉，换下一个，直到满足条件时，直接下一轮不需要递归。

### 17. [实现快排](./quickSort.js)

随便取数组中的一个数，然后以该数为中心，分类出比他大的数，和比他小的数，递归实现每一个分类，直到最后为只有一个元素的数组为止，最终根据位置连接成一个排好序的数组。

### 18. [周期执行某个函数 n 次](./repeatFunc.js)

该函数使用到闭包，通过返回一个函数，给函数传递参数，使用call方法继承上一个inner函数的参数并执行。

### 19. [字符串反转](./reverseString.js)

使用递归将每个字符串的第一个字符放在当前字符串的后面，最后连接起来实现反转。

### 20. [节流与防抖](./throttle&debounce.js)

节流：设置一个延时器，限制事件的触发频率，按照预定的时间段间隔执行，定义一个开关，在规定的时间内关闭开关，停止事件触发，相应的时间后打开开关，触发一个事件并关闭开关。

防抖：通过延时器，限制事件的触发频率，只执行最会一次，规定时间内重复触发该事件，清除上一个延时器，重新初始化一个延时器。

### 21. [双链表](./DoublyLinkedList.js)

### 22. [call&apply&bind](./call&apply&bind.js)

### 23. [手写new](./new.js)

知识点：

1. `Object.setPrototypeOf(obj, constructor.prototype)` 给对象obj设置新的prototype属性。
2. `[].shift.apply(arguments)` 通过apply方法，使得数组方法shift也可以用在伪数组身上。

### 24. [发布订阅模式](./EventEmitter.js)

### 25. [数组扁平化](./flatten.js)

### 26. [寄生组合继承](./extend2.js)

### 27. [并行限制的Promise调度器](./scheduler.js)

### 28. [手写instanceof](./myInstanceof.js)

### 29. [冒泡排序](./bubbleSort.js)

### 30. [选择排序](./selectSort.js)

### 31. [插入排序](./insertSort.js)

### 32. [快速排序](./quickSort.js)

### 33. [归并排序](./mergeSort.js)

### 34. [二分法查找](./search.js)

### 35. [按顺序调取函数](./lazyMan.js)

### 36. [版本号排序](./versionSort.js)

1. `Array.prototype.sort()` 方法，参数为剪头函数`(a, b) => a - b`时，返原数组变为升序排序，`(a, b) => b - a`时，原数组变为降序排序。

2. 箭头函数直接返回负数，相当于数组取反。

### 37. [动态求解最小硬币数](./coinChange.js)

### 38, [手写AJAX](./ajax.js)

### 39, [实现 Promise & then & all](./MyPromise.js)

实现了 Promise 的实例方法 then 和本身的静态方法 all，定时器和链式调用还未完成，需要进一步完善。