// 整数反转
const isPalindrome1 = (x: number): boolean => {
    if (x < 0) {
        return false
    } else if (x === 0) {
        return true
    } else if (x > 0) {
        const reversedString: string = x.toString().split("").reverse().join("")
        const result: number = +reversedString
        return result === x
    }
}

// 双指针
const isPalindrome2 = (x: number): boolean => {
    if (x < 0) {
        return false
    } else if (x === 0) {
        return true
    } else if (x > 0) {
        const xArr: string[] = x.toString().split("")
        let start: number = 0
        let end: number = xArr.length - 1
        while (start < end) {
            if (xArr[start] != xArr[end]) return false
            start += 1
            end -= 1
        }
        return true
    }
}