function merge(array1, array2){
    let finalArray = [];

    for (let i = 0; i < array1.length; i++) {
        if(i % 2 === 0){
            finalArray[i] = +array1[i] + +array2[i];
        }
        else{
            finalArray[i] = array1[i] + array2[i];
        }
    }
    console.log(finalArray.join(" - "));
}
