function solve(grade) {
  +grade;
  if (grade >= 5.50) {
    return "Excellent";
  } else if (grade >= 4.50) {
    return "Very good";
  } else if (grade >= 3.50) {
    return "Good";
  } else if (grade >= 3.00) {
    return "Poor";
  }
  else {
      return "Fail";
  }
  
}
