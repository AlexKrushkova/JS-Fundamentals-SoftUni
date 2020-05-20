function solve(num) {
  num = +num;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
      if (num >0 && i % 2 != 0) {
        sum += i;
        console.log(i);
        num--;
      }
    }
    console.log(`Sum: ${sum}`);
}
