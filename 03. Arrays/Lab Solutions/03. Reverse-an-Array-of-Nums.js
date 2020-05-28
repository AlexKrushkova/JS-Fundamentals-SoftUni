function reverse(num, arr){
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(arr[i]);
    }
    let output = "";
    for (let i = array.length-1; i >= 0; i--) {
        const element = array[i];
        output += element + " ";
    }
    console.log(output);
}
