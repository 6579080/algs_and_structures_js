function factorial(n) {
    if (n === 1){
        return true
    }
    let res
    res =  n * factorial(n-1)
    return res
}

console.log(factorial(6))

