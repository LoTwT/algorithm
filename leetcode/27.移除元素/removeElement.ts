// 双指针优化
const removeElement = (nums: number[], val: number): number => {
    let left: number = 0
    let right: number = nums.length

    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1]
            right -= 1
        } else {
            left += 1
        }
    }

    return left
}