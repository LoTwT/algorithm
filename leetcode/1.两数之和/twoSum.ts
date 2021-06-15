// 两重 for
const twoSum1 = (nums: number[], target: number): number[] => {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// map + for in
const twoSum2 = (nums: number[], target: number): number[] => {
    let map = new Map<number, number>()

    for (const key in nums) {
        if (map.has(target - nums[key])) {
            return [map.get(target - nums[key]), Number(key)]
        } else {
            map.set(nums[key], Number(key))
        }
    }
}