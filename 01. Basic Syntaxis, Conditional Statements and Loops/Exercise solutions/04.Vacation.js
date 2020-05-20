function solve(countGroup, type, dayOfWeek) {
  countGroup = +countGroup;

  let price = 0;

  switch (dayOfWeek) {
    case "Friday":
      if (type === "Students") {
        price = 8.45;
      } else if (type === "Business") {
        price = 10.9;
      } else {
        price = 15;
      }
      break;

    case "Saturday":
      if (type === "Students") {
        price = 9.80;
      } else if (type === "Business") {
        price = 15.60;
      } else {
        price = 20;
      }
      break;

      case "Sunday":
        if (type === "Students") {
          price = 10.46;
        } else if (type === "Business") {
          price = 16;
        } else {
          price = 22.50;
        }
        break;
  }
  let totalPrice = price*countGroup;

  if (countGroup >= 30 && type ==="Students"){
    totalPrice-= totalPrice*0.15;
    }
  else if(countGroup >= 100 && type === "Business"){
    totalPrice -= price*10;
  }
  else if((countGroup >= 10 && countGroup<= 20) && type === "Regular"){
    totalPrice-= totalPrice*0.05;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

