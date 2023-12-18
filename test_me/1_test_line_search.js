const array = [1, 3, 45, 5, 73, 3, 6, 7]
let counter = 0;


function line_search(array, item) {
    for (let i = 0; i < array.length; i++) {
        counter += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}


console.log(line_search(array, 60))
console.log('число итераций: ', counter)
