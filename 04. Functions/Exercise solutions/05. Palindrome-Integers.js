  function palindromeIntegers(input) {

    for (let i = 0; i < input.length; i++) {
        let inputMirror = Number(String(input[i]).split('').reverse().join(''));

        if (input[i] === inputMirror) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}