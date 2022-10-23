
// 实现 promise
class MyPromise {
    constructor(executor) {
        this.initValue()
        this.initBind()
        try {
            executor(this.resolve, this.reject)
        } catch (err) {
            this.reject(err)
        }
        
    }

    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        this.PromiseResult = null
        this.PromiseState = 'pending'
    }

    resolve(value) {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value
    }

    reject(reason) {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = reason
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason
        }
        if (this.PromiseState === 'fulfilled') {
            onFulfilled(this.PromiseResult)
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        }
    }

    // Promise all 方法
    static all(promises) {
        const result = []
        let count = n
        return new MyPromise((resolve, reject) => {
            const addData = (index, value) => {
                result[index] = value
                count++
                if (count === promises.length) resolve(result)
            }
            promises.forEach((promise, index) => {
                if (promise instanceof MyPromise) {
                    promise.then(res => {
                        addData(index, res)
                    }, err => reject(err))
                } else {
                    addData(index, promise)
                }
            })
        })
    }
}
