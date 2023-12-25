// 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720

const factorial = (n) =>{
    if (n===1){
        return 1
    }
    console.log(n)
    res = n * factorial(n -1)
    return res
}
console.log(factorial(6))

function fac2(n){
    let res = 1
    while (n>0){
        res = res * n
        n-=1
        console.log(res)
    }
    return res
}
// console.log(fac2(6))


const fibonachi = (n) => {
    if (n === 1 || n === 2){
        return 1
    }
    console.log(n)
    return fibonachi(n-1) + fibonachi(n-2)
}
// console.log(fibonachi(6))

