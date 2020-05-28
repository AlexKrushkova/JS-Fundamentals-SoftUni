function solve(array){
    let evenSum = 0;
    let oddSum = 0;
    let numbers = [];
    for (let i = 0; i < array.length; i++) {
       numbers[i] = Number(array[i]);
    }
    for (let num of numbers) {
        if(num % 2===0){
            evenSum+=num;
        }
        else{
            oddSum += num;
        }
    }
    console.log(evenSum-oddSum);
}

