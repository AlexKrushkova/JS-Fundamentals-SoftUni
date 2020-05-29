function solve(a, b) {
  let starChar = a.charCodeAt();
  let endChar = b.charCodeAt();
  let result = "";
  let beggin;
  let end;

  if (starChar >= endChar) {
    beggin = endChar;
    end = starChar;
  } else {
    beggin = starChar;
    end = endChar;
  }

  for (let i = beggin + 1; i < end; i++) {
    result += String.fromCharCode(i) + " ";
  }
  console.log(result);
}
