const arr = [0, 3, 2, 4, 5, 6, 65, 4, 4, 4, 3, -4, -7, 3, 3, 56,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let less = [];
    let great = [];
    let middle = array[middleIndex]
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === middleIndex) {
            continue
        }
        if (array[i] > middle) {
            great.push(array[i])
        } else {
            less.push(array[i])
        }
    }
    return [...quickSort(less), middle, ...quickSort(great)]
}


console.log(quickSort(arr))
console.log(count)