const array = [1,2,3,4,6,7,8,9,10,12,13,14,15,16];
let counter = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle = 0;
    let found = false;
    let position = -1;
    while (found === false && start <= end){
        counter +=1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === item){
            found = true;
            position = middle;
            return position
        }
        if (item < array[middle]){
            end = middle -1;
        }else {
            start = middle +1;
        }

    }
    return position
}

console.log(binarySearch(array, 2))
console.log('итераций ',counter)

