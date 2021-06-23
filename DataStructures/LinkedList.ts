export type LinkedListNode<T> = {
    value: T,
    next: LinkedListNode<T> | null,
    prev?: LinkedListNode<T> | null,
} | null

/**
 * 普通链表
 */
export default class LinkedList<T> {
    private head: LinkedListNode<T> = null
    private length: number = 0

    /**
     * O(n)
     * 获取指定位置的节点
     * @param index 
     * @returns 
     */
    public getItem(index: number): T {
        const res = this.findNthNode(index)

        return res ? res.value : undefined
    }

    /**
     * O(n)
     * 设置指定位置的节点
     * @param value 
     * @param index 
     */
    public setItem(value: T, index: number): void {
        let res = this.findNthNode(index)
        res && (res.value = value)
    }

    /**
     * O(n)
     * 添加节点
     * @param value 
     */
    public append(value: T): void {
        // 获取尾节点
        const tail = this.findTail()

        // 第一次
        if (!tail) {
            this.head = {
                value,
                next: null,
            }
        } else {
            // 不是第一次
            tail.next = { value, next: null }
        }

        this.length += 1
    }

    /**
     * O(n)
     * 在指定位置插入节点
     * @param value 
     * @param index 
     */
    public insert(value: T, index: number): void {
        if (index === 0) {
            const oldHead = this.head
            this.head = { value, next: oldHead }
        } else {
            let prevNode = this.findNthNode(index - 1)
            if (prevNode) {
                const oldNode = prevNode.next
                prevNode.next = { value, next: oldNode }
            }
        }
        this.length += 1
    }

    /**
     * O(n)
     * 删除指定位置的节点
     * @param index 
     */
    public remove(index: number): void {
        if (index === 0) { // 删第一个
            if (this.head) this.head = this.head.next
        } else {
            let prevNode = this.findNthNode(index - 1)
            if (!prevNode) return

            let currentNod = prevNode.next
            if (!currentNod) return

            prevNode.next = currentNod.next
        }
        this.length -= 1
    }

    /**
     * 查找节点是否在链表中
     * @param value 
     */
    public search(value: T): number {
        let currentNode = this.head
        let i = 0

        while (currentNode) {
            if (currentNode.value === value) return i

            currentNode = currentNode.next
            i += 1
        }

        return -1
    }

    /**
     * O(n)
     * 寻找尾节点
     * @returns 
     */
    private findTail(): LinkedListNode<T> {
        // head 不存在，直接返回 null
        if (!this.head) return null
        else {
            let currentNode: LinkedListNode<T> = this.head

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            return currentNode
        }
    }

    /**
     * O(n)
     * 找到指定位置的节点
     * @param index 
     * @returns 
     */
    private findNthNode(index: number): LinkedListNode<T> {
        this.checkIndex(index)

        if (this.head == null) return undefined

        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            if (currentNode.next == null) return undefined
            currentNode = currentNode.next
        }

        return currentNode
    }

    /**
     * O(1)
     * 检查 index 是否有效
     * @param index 
     */
    private checkIndex(index: number): void {
        if (index < 0 || index >= this.length) throw new RangeError()
    }
}

let list = new LinkedList<number>()
list.append(11)
list.append(22)
list.append(33)
list.setItem(55, 1)
console.log(list)
