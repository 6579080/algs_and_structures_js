function recursion(n) {
    if (n===1){
        return 1
    }
    console.log(n)
    return recursion(n -1)
}

// console.log(recursion(5))
function factorial(n) {
    if (n===1){
        return 1
    }
    return n * factorial(n -1)
}

// console.log(factorial(4))

let count = 0

function fibonachi(n) {
    if (n===1 || n ===2){
        return 1
    }
    // console.log(n)
    count +=1
    console.log(count)
    return fibonachi(n -1) + fibonachi(n-2)
}
console.log(fibonachi(1))


