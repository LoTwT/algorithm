// 递归
// 斐波那契数列

const fibonacci = (n: number): number => {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(10))