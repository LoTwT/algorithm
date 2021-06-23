import { LinkedListNode } from "./LinkedList"

class LinkedListQueue<T> {
    private head: LinkedListNode<T> = null
    private tail: LinkedListNode<T> = null

    /**
     * O(1)
     * 入队
     * @param value 
     */
    public enqueue(value: T): void {
        if (!this.tail) {
            this.head = this.tail = { value, next: null, prev: null }
        } else {
            this.tail.next = { value, next: null, prev: this.tail }
            this.tail = this.tail.next
        }
    }

    /**
     * O(1)
     * 出队
     */
    public dequeue(): T {
        if (!this.head) return undefined
        else {
            const value = this.head.value

            if (this.head.next) {
                this.head.next.prev = null
                this.head = this.head.next
            } else {
                this.head = this.tail = null
            }

            return value
        }
    }
}