import { LinkedListNode } from "./LinkedList";

/**
 * 头尾链表 + 双链表
 */
class HTLinkedList<T> {
    private head: LinkedListNode<T> = null
    private tail: LinkedListNode<T> = null
    private length: number = 0

    /**
     * O(1)
     * 添加节点
     * @param value 
     */
    public append(value: T): void {
        if (this.tail) {
            this.tail.next = { value, next: null, prev: this.tail }
            this.tail = this.tail.next
        } else {
            this.head = this.tail = { value, next: null, prev: null }
        }
        this.length += 1
    }

    public pop(): T {
        if (this.tail) { // 有尾节点
            if (!this.tail.next && !this.tail.prev) { // 头尾节点是同一个
                const value = this.tail.value

                this.head = this.tail = null
                this.length = 0

                return value
            } else if (this.tail.prev) {
                const value = this.tail.value

                // 删除尾节点
                this.tail.prev.next = null
                this.tail = this.tail.prev

                this.length -= 1

                return value
            } else return undefined
        } else return undefined
    }
}