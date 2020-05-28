function solve(firstArray, secondArray) {
  let sum = 0;
  let numbers = [];
  areIdentical = true;

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areIdentical = false;
      break;
    } else {
      numbers[i] = Number(firstArray[i]);
    }
  }
  if (areIdentical) {
    for (let num of numbers) {
      sum += num;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
