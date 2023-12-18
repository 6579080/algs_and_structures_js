const array = [0, 1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11, 13, 15, 14]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let meddle = 0
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor(start + end) / 2;
        if (array[meddle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(array, 2))
console.log(count, ' итераций')
























