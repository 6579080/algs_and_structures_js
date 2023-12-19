const arr = [0,3,2,4,5,6,65,4,4,4,3,-4,-7,3,3,56,]
let count = 0

function selectionSort(array) {
    let tmp;
    for (let i = 0; i < array.length; i++) {
        for (let j = i +1; j < array.length; j++) {
            count +=1
            if (array[j] < array[i]){
                tmp = array[i]
                array[i] = array[j]
                array[j] = tmp
            }

        }
    }
    return array



}

console.log(selectionSort(arr))
console.log(count)