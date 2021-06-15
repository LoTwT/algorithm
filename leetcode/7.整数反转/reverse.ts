// 初见 没用 Array.prototype.reverse()
const reverse1 = (x: number): number => {
    const hasMinus: boolean = x < 0
    let xArr: string[] = x.toString().split("")

    let result: string[] = []
    const length: number = xArr.length
    for (let i = 0; i < length; i++) {
        result.push(xArr.pop())
    }

    if (hasMinus) {
        result.pop()
        result.unshift("-")
    }

    let res: number = Number(result.join(""))
    let safeNum: number = Math.pow(2, 31)
    return res <= safeNum - 1 && res >= -safeNum ? res : 0
}

// Array.prototype.reverse()
const reverse2 = (x: number): number => {
    let reversedString: string = x.toString().split("").reverse().join("")
    let result: number = x >= 0 ? +reversedString : (-1) * (+reversedString.substring(0, reversedString.length - 1))
    const boundary: number = Math.pow(2, 31)
    return result >= -boundary && result <= boundary - 1 ? result : 0
}
