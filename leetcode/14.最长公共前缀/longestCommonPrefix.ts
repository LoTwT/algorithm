// 将数组第一个字符串作为初始答案
// 找出第一个字符串和第二个字符串的最大公共前缀
// 然后将结果与第三个字符串找最大公共前缀
// 如此循环
// 当结果是空字符串时终端循环
const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) return ""

    let result: string = strs[0]
    const length: number = strs.length

    for (let i = 1; i < length; i++) {
        let j: number = 0
        for (; j < result.length && j < strs[i].length; j++) {
            if (result.charCodeAt(j) !== strs[i].charCodeAt(j)) break
        }
        result = result.substring(0, j)
        if (result === "") return result
    }
    return result
};