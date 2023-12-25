// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720


function f(n) {
    for (let i = 1; i > n+1; i++) {
        n = n * i
    }
    return n

}

console.log(f(6))