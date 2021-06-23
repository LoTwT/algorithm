import { LinkedListNode } from "./LinkedList";

/**
 * 基于链表的堆栈
 */
class LinkedListStack<T> {
    // private head: LinkedListNode<T> = null
    private tail: LinkedListNode<T> = null
    private length: number = 0

    /**
     * O(1)
     * 入栈
     * @param value 
     */
    public push(value: T): void {
        if (!this.tail) { // 堆栈为空
            // this.head = this.tail = { value, next: null, prev: null }
            this.tail = { value, next: null, prev: null }
        } else {
            this.tail.next = { value, next: null, prev: this.tail }
            this.tail = this.tail.next
        }

        this.length += 1
    }

    /**
     * O(1)
     * 出栈
     * @returns 
     */
    public pop(): T {
        if (!this.tail) return undefined
        else if (!this.tail.prev) { // 只有一个节点
            const value = this.tail.value

            // this.head = this.tail = null
            this.tail = null

            this.length -= 1

            return value
        } else {
            const value = this.tail.value

            this.tail.prev.next = null
            this.tail = this.tail.prev

            this.length -= 1

            return value
        }
    }
}