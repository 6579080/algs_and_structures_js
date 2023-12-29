const arr = [0, 3, 2, 4, 5, 6, 65, 4, 4, 4, 3, -4, -7, 3, 3, 56,]
const arr2= [1,2,3,4,6,7,8,9,10,12,13,14,15,16];
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
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

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    console.log(middle)
    count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

// console.log(recursiveBinarySearch(arr2, 9, 0, arr.length))
// console.log(count)















