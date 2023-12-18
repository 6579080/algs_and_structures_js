const arr = [0,3,2,4,5,6,65,4,4,4,3,-4,-7,3,3,56,]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            count +=1
            if (array[j] < array[indexMin]){
                indexMin = j
            }
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log(count)