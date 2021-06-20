// 二分查找 (折半查找)
// 查找有序结构

// 生成一个长度为 100, 值范围 0 - 100 的有序数组
const generateRandomArr1 = (): number[] => {
    const randomArr: number[] = []
    for (let i = 0; i < 100; i++) {
        randomArr.push(Math.floor(Math.random() * 100))
    }
    return randomArr.sort((a, b) => a - b)
}

const binarySearchRecursive = (originArr: number[], target: number, startPos: number, endPos: number): number => {
    if (startPos > endPos) return -1 // 没找到

    const center: number = Math.floor((startPos + endPos) / 2)

    if (originArr[center] === target) {
        return center
    } else if (originArr[center] < target) { // 向右找
        return binarySearchRecursive(originArr, target, center + 1, endPos)
    } else { // 向左找
        return binarySearchRecursive(originArr, target, startPos, center - 1)
    }
}

const originArr: number[] = generateRandomArr1()
console.log(binarySearchRecursive(originArr, 50, 0, originArr.length))

