
/*
    实现一个LazyMan，可以按照以下方式调用:
        LazyMan(“Hank”)输出:
        Hi! This is Hank!

        LazyMan(“Hank”).sleep(10).eat(“dinner”)输出:
        Hi! This is Hank!
        //等待10秒..
        Wake up after 10
        Eat dinner~

        LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出:
        Hi This is Hank!
        Eat dinner~
        Eat supper~

        LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出:
        //等待5秒
        Wake up after 5
        Hi This is Hank!
        Eat supper
*/

// LazyMan
class _LazyMan {
    constructor(name) {
        this.tasks = [];
        const task = () => {
            console.log(`我是${name}！`);
            this.next();
        }
        this.tasks.push(task);
        setTimeout(() => {
            this.next();
        }, 0);
    }

    next() {
        const task = this.tasks.shift();
        task && task();
    }

    eat(eat) {
        const task = () => {
            console.log(`我要吃${eat}`);
            this.next();
        }
        this.tasks.push(task);
        return this;
    }

    sleep(time) {
        this._sleep(time, false);
        return this;
    }

    sleepFirst(time) {
        this._sleep(time, true);
        return this;
    }

    _sleep(time, first) {
        const task = () => {
            setTimeout(() => {
                console.log(`${time}秒钟之后醒来`);
                this.next();
            }, time * 1000);
        }
        if (first) {
            this.tasks.unshift(task);
        } else {
            this.tasks.push(task);
        }
    }
}

function lazyMan(name) {
    return new _LazyMan(name);
}

// lazyMan('张三').eat('米饭').sleepFirst(3);
// lazyMan('李四').sleep(3).eat('米饭');
lazyMan('王五').eat('米饭');

