function factorial(n) {
    if (n === 1){
        return true
    }
    let res
    res =  n * factorial(n-1)
    return res
}

// console.log(factorial(6))

function fibonachi(n) {
    if (n ===1|| n ===2){
        return 1
    }
    return fibonachi(n -1) + fibonachi(n -2)
}


console.log(fibonachi(8))
