function solve(typeOfDay, age){
    age = +age;
    if (age > 122 || age < 0){
        console.log("Error!");
        return;
    }

    let price = 0;

    if(age >=0 && age <=18){
        if(typeOfDay === "Weekday"){
            price = 12;
        }
        else if (typeOfDay === "Weekend"){
            price = 15;
        }
        else {
            price = 5;
        }
    }
    else if (age > 18 && age <=64){
        if(typeOfDay === "Weekday"){
            price = 18;
        }
        else if (typeOfDay === "Weekend"){
            price = 20;
        }
        else {
            price = 12;
        }
    }
    else{
        if(typeOfDay === "Weekday"){
            price = 12;
        }
        else if (typeOfDay === "Weekend"){
            price = 15;
        }
        else {
            price = 10;
        }
    }
    console.log(`${price}$`);
}

