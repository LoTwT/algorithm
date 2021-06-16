const romanToInt = (s: string): number => {
    // 对象 比 map 占用内存更小
    const orm: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result: number = 0;
    let value: number = 0
    // 长度在这里计算 运行速度更快
    const len = s.length;

    for (let i = 0; i < len; i++) {
        value = orm[s[i]]
        if (value < orm[s[i + 1]]) {
            result -= value
        } else {
            result += value
        }
    }
    return result;
}