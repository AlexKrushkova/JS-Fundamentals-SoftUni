  function commonElements(arr1,arr2){
    for (let arg1 of arr1){
        for (let arg2 of arr2){
            if (arg1===arg2){
                console.log(arg1);
            }
        }
    }
}