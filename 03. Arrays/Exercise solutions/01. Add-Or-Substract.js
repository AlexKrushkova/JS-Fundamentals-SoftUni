function addAndSubstract(arr) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    for (let index in arr) {
        if (arr[index] % 2 === 0) {
            sumOriginalArray += arr[index];
            arr[index] = arr[index] + Number(index);
            sumModifiedArray += arr[index];
        } else {
            sumOriginalArray += arr[index];
            arr[index] = arr[index] - Number(index);
            sumModifiedArray += arr[index];
        }
    }
    console.log(arr);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}