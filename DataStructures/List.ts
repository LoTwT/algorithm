/**
 * 线性表
 * 代码实现中，默认 JS 数组为定长数组
 * 并忽略 JS 数组自带功能, 采用更底层的方法进行实现
 * 1. 创建 —— 空 List
 * 2. 添加 —— 添加至尾部
 * 3. 插入 —— 插入中间位置
 * 4. 修改
 * 5. 删除
 * 6. 搜索
 */

class List<T> {
    // 存储容器总长, 默认初始长度 10
    private size: number = 10
    // 已使用长度
    private length: number = 0
    // 存储数据的容器
    private values = new Array<T>(10)

    /**
     * O(1)
     * 获取对应下标的数据
     * @param { number } index 
     * @returns 
     */
    public getItem(index: number): T {
        this.checkIndex(index)

        return this.values[index]
    }

    /**
     * O(1)
     * 修改指定位置的数据
     * @param { T } value 
     * @param { number } index 
     */
    public setItem(value: T, index: number): void {
        this.checkIndex(index)

        this.values[index] = value
    }

    /**
     * O(n)
     * 在末尾添加数据
     * @param value 
     */
    public append(value: T): void {
        // 在末尾添加数据 并且 使已使用长度 + 1
        this.values[this.length++] = value
        this.realloc()
    }

    /**
     * O(n)
     * 在指定位置插入数据
     * @param { T } value 
     * @param { number } index 
     */
    public insert(value: T, index: number): void {
        if (index < 0 || index > this.length) {
            throw new RangeError()
        } else if (index === this.length) { // 在末尾插入, 相当于 append
            this.append(value)
        } else {
            // 1. 第 index 位开始 (包含第 index 位) 的数据, 向后移动一位
            for (let i = this.length - 1; i >= index; i--) {
                this.values[i + 1] = this.values[i]
            }
            // 2. 要插入的数据赋值给第 index 位
            this.values[index] = value
            this.length++
            this.realloc()
        }
    }

    /**
     * O(n)
     * 删除指定位置的数据
     * 删除之后, 修改 length 指向原先最后一位, 后续操作会直接操作这一位, 所以不用特意删除, 增加性能消耗
     * @param { number } index 
     */
    public remove(index: number): void {
        this.checkIndex(index)

        // 将后面数据向前移动一位
        for (let i = index + 1; i < this.length; i++) {
            this.values[i - 1] = this.values[i]
        }
        // 处理长度
        this.length--

        this.realloc()
    }

    /**
     * O(n)
     * 查找对应数据的下标, 找不到则返回 -1
     * @param { T } value 
     * @returns { number }
     */
    public search(value: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.values[i] === value) return i
        }

        return -1
    }

    /**
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
            // 3. 销毁旧容器, 将新容器挂载到 List 上
            delete this.values
            this.values = new_values
        }
    }

    /**
     * 检查 index 是否越界
     * @param { number } index 
     */
    private checkIndex(index: number): void {
        // 下标越界时, 抛出 RangeError
        if (index < 0 || index >= this.length) {
            throw new RangeError()
        }
    }
}