// 双指针
const removeDuplicates = (nums: number[]): number => {
    const length: number = nums.length

    // 有效位下标
    let validPos: number = 0
    // 搜索位下标
    let pos: number = 1

    while (pos < length) {
        if (nums[validPos] != nums[pos]) {
            // 这个判断是针对类似 [0, 1, 2, 3, 4] 这样的数组, 防止不必要的赋值
            if (pos - 1 > validPos) {
                nums[validPos + 1] = nums[pos]
            }
            validPos += 1
        }
        pos += 1
    }

    // 要返回长度, 所以 +1
    return validPos + 1
};