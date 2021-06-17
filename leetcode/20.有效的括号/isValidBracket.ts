// 栈
const isValidBracket = (s: string): boolean => {
    if (s.length === 0 || s.length % 2 === 1) return false

    const map: Record<string, string> = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    let stack: string[] = []

    for (const bracket of s) {
        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket)
        } else {
            if (map[stack.pop()] !== bracket) {
                return false
            }
        }
    }

    return stack.length === 0
}