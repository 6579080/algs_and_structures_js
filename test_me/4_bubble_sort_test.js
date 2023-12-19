const arr = [0, 3, 2, 4, 5, 6, 65, 4, 4, 4, 3, -4, -7, 3, 3, 56,]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count += 1
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log(count)