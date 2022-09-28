
// 寄生组合继承
function Parent(name) {
    this.name = name;
    this.say = function () {
        console.log('Parent');
    }
}

Parent.prototype.play = function () {
    console.log(this.name)
}

function Children(age, name) {
    this.age = age;
    Parent.call(this, name);
}

Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;

// test
const c = new Children(18, '张三');
console.log(c.name);
console.log(c.age);
c.say();
c.play();