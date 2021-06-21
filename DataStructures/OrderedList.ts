import List from "./List"

/**
 * 线性表 - 有序表
 */
class OrderedList<T> extends List<T> {
    public setItem(value: T, index: number): void {
        super.setItem(value, index)
        this.adjust(index)
    }

    public append(value: T): void {
        super.append(value)
        this.adjust(this.length - 1)
    }

    public insert(value: T, index: number): void {
        super.insert(value, index)
        this.adjust(index)
    }

    public search(value: T): number {
        let startPos: number = 0
        let endPos: number = this.values.length - 1
        let centerPos: number = undefined
        while (startPos <= endPos) {
            centerPos = Math.floor((startPos + endPos) / 2)

            if (this.values[centerPos] === value) return centerPos
            else if (this.values[centerPos] < value) { // 向后找
                startPos = centerPos + 1
            } else { // 向左找
                endPos = centerPos - 1
            }
        }

        return -1
    }

    /**
     * O(n)
     * 调整数据位置
     * @param index 
     */
    private adjust(index: number): void {
        // 往前调整
        if (index > 0 && this.values[index - 1] > this.values[index]) {
            for (let i = index; i > 0; i--) {
                if (this.values[i - 1] > this.values[i]) {
                    let temp: T

                    temp = this.values[i - 1]
                    this.values[i - 1] = this.values[i]
                    this.values[i] = temp
                } else {
                    break
                }
            }
        } else if (index < this.length - 1 && this.values[index + 1] < this.values[index]) { // 往后调整
            for (let i = index; i < this.length; i++) {
                if (this.values[i + 1] < this.values[i]) {
                    let temp: T

                    temp = this.values[i + 1]
                    this.values[i + 1] = this.values[i]
                    this.values[i] = temp
                } else {
                    break
                }
            }
        }
    }
}

let list = new OrderedList<number>()