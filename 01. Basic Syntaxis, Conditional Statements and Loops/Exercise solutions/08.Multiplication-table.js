function solve(num) {
  num = +num;

  for (let i = 1; i <= num; i++) {
    for (let col = 1; col <= i; col++) {
        console.log(i + " ");
    }
  }
}
solve(5);
