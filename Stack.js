
// 模拟栈
const Stack = (() => {
    const arr = []
    return {
        push: value => { 
            arr.push(value)
        },
        pop: () => arr.pop(),
        size: () => arr.length,
    }
})()

Stack.push('a')
Stack.push('b')
Stack.push('c')
console.log(Stack.size())
console.log(Stack.pop())