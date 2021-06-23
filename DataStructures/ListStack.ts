/**
 * 基于线性表的堆栈
 */
export default class ListStack<T> {
    private length: number = 0
    private size: number = 10
    private values = new Array<T>(10)


    /**
     * O(n)
     * 入栈
     * @param value 
     */
    public push(value: T): void {
        this.values[this.length] = value
        this.length += 1

        this.realloc()
    }

    /**
     * O(n)
     * 出栈
     */
    public pop(): T {
        if (this.length === 0) return undefined
        else {
            const value = this.values[this.length - 1]
            this.length -= 1

            this.realloc()

            return value
        }
    }

    /**
     * O(n)
     * 动态空间分配
     */
    private realloc() {
        let new_values: T[] = null
        if (this.size === this.length) { // 扩容
            new_values = new Array<T>(this.size *= 2)
        } else if (this.length < (this.size / 4)) { // 减容
            new_values = new Array<T>(Math.floor(this.size / 2))
            this.size = Math.floor(this.size / 2)
        }

        if (new_values) {
            for (let i = 0; i < this.length; i++) {
                new_values[i] = this.values[i]
            }

            this.values = new_values
        }
    }
}

let stack = new ListStack<number>()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)

console.log(stack.pop())
stack.push(9)
console.log(stack)