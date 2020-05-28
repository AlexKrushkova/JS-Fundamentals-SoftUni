function solve(distance, passangers, priceForLiter){
    let fuelNeeded = (distance/100)*7;
    fuelNeeded += passangers * 0.100;
    let money = fuelNeeded * priceForLiter;

    console.log(`Needed money for that trip is ${money}lv.`)
}