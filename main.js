function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
                let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let array = [9 , 5 , 4 , 74, 95, 74, 0, 66, 74 , 2 , 62 , 1];
console.log("Original array:", array);
console.log("Sorted array:", insertionSort(array));
