// 二分查找 (折半查找)
// 查找有序结构

// 生成一个长度为 100, 值范围 0 - 100 的有序数组
const generateRandomArr = (): number[] => {
    const randomArr: number[] = []
    for (let i = 0; i < 100; i++) {
        randomArr.push(Math.floor(Math.random() * 100))
    }
    return randomArr.sort((a, b) => a - b)
}

const binarySearch = (originArr: number[], target: number): number => {
    // 初始起始查找位置
    let startPos: number = 0
    // 初始结束查找位置
    let endPos: number = originArr.length - 1
    // 二分查找的中间位置
    let centerPos: number = undefined

    // 起始查找位置 <= 结束查找位置
    while (startPos <= endPos) {
        // 处理数组长度奇偶不同时的情况
        centerPos = Math.floor((startPos + endPos) / 2)

        if (originArr[centerPos] === target) { // 找到了
            return centerPos
        } else if (originArr[centerPos] < target) { // 该次查找的中间位置的值 < 目标值, 下一次向右找
            startPos = centerPos + 1
        } else { // 该次查找的中间位置的值 > 目标值, 下一次想左找
            endPos = centerPos - 1
        }
    }

    // 没找到
    return -1
}

console.log(binarySearch(generateRandomArr(), 50))