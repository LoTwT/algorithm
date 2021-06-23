class ListQueue<T> {
    private values = new Array<T>(10)
    private length: number = 0
    private size: number = 10

    /**
     * O(n)
     * 入队
     * @param value 
     */
    enqueue(value: T): void {
        this.values[this.length] = value
        this.length += 1

        this.realloc()
    }

    /**
     * O(n)
     * 出队
     */
    dequeue(): T {
        if (this.length === 0) return undefined
        else {
            const value = this.values[0]

            for (let i = 1; i < this.length; i++) {
                this.values[i - 1] = this.values[i]
            }

            this.length -= 1
            this.realloc()

            return value
        }
    }

    /**
     * O(n)
     * 动态内存分配
     */
    private realloc(): void {
        // 1. 创建一个新的容器
        let new_values = null

        if (this.length === this.size) { // 当已使用长度 等于 存储容器总长, 需要扩容
            new_values = new Array<T>(this.size *= 2)
        } else if (this.length < this.size / 4) { // 缩小
            new_values = new Array<T>(this.size = Math.floor(this.size / 2))
        }

        // 容器被实例化时, 才需要重新分配空间
        if (new_values) {
            // 2. 将原有数据复制到新的容器中
            for (let i = 0; i < this.length; i++) {
                new_values[i] = this.values[i]
            }
            // 3. 销毁旧容器, 挂载新容器
            delete this.values
            this.values = new_values
        }
    }
}