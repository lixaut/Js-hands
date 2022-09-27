
/*
    1. 双链表数据结构的每个元素必须有以下几个属性：
        + value：每个元素的值
        + next：链表中指向下一个元素的指针（如果没有则为 null）
        + previous：链表中指向上一个元素的指针（如果没有则为null）
    
    2. 双链表数据结构的主要属性：
        + size：双链表中的元素个数
        + head：双链表中的第一个元素
        + tail：双链表中的最后一个元素

    3. 双链表中的主要方法：
        + insertAt：在指定索引处插入一个元素
        + removeAt：在指定索引处移出一个元素
        + getAt：取出指定索引处的元素
        + clear：清空双链表
        + reverse：倒置双链表中的所有元素
*/

class DoublyLinkedList {
    constructor() {
        this.nodes = [];
    }

    get size() {
        return this.nodes.length;
    }

    get head() {
        return this.size ? this.nodes[0] : null;
    }

    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode, previous: previousNode };

        if (previousNode) previousNode.next = node;
        if (nextNode) nextNode.previous = node;
        this.nodes.splice(index, 0, node);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    insertLast(value) {
        this.insertAt(this.size, value);
    }

    getAt(index) {
        return this.nodes[index];
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;
        
        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = [];
    }

    reverse() {
        this.nodes = this.nodes.reduce((acc, { value }) => {
            const nextNode = acc[0] || null;
            const node = { value, next: nextNode, previous: null };
            if (nextNode) nextNode.previous = node;
            return [node, ...acc]
        }, [])
    }
}

const list = new DoublyLinkedList();
list.insertFirst(1);
list.insertFirst(2)
list.insertLast(3)
console.log(list.nodes);
list.reverse()
console.log(list.nodes);
console.log(list.tail);
