function solve(array){
    let sum = 0;
    let numbers = [];
    for (let i = 0; i < array.length; i++) {
       numbers[i] = Number(array[i]);
    }
        for (let num of numbers) {
            if(num % 2 === 0){
                sum +=num;
        }
    }
    console.log(sum);
}
