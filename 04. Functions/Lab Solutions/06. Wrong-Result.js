function solve(numOne, numTwo, numThree) {
    let result = '';
    if ((numOne > 0 && numTwo > 0 && numThree > 0) ||
        (numOne < 0 && numTwo < 0 && numThree > 0) ||
        (numOne < 0 && numTwo > 0 && numThree < 0) ||
        (numOne > 0 && numTwo < 0 && numThree < 0) ||
        numOne === 0 || numTwo === 0 || numThree === 0) {
        result = 'Positive';
    } else if ((numOne < 0 && numTwo < 0 && numThree < 0) ||
        (numOne < 0 && numTwo > 0 && numThree > 0) ||
        (numOne > 0 && numTwo < 0 && numThree > 0) ||
        (numOne > 0 && numTwo > 0 && numThree < 0)) {
        result = 'Negative';
    }
    console.log(result)
}