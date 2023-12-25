const arr = [0, 3, 2, 4, 5, 6, 65, 4, 4, 4, 3, -4, -7, 3, 3, 56,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }

    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr))
console.log(count)