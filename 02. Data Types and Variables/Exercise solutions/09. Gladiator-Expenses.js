function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let moneySpent = 0;
    let shieldCounter = 0;
    helmetIsBroken = false;
    swordIsBroken = false;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0){
            helmetIsBroken = true;
            moneySpent += helmetPrice;
        }
        if(i % 3 == 0){
            swordIsBroken = true;
            moneySpent += swordPrice;
        }
        if (helmetIsBroken && swordIsBroken){
            shieldCounter++;
            moneySpent += shieldPrice;

            if (shieldCounter == 2  ){
                moneySpent += armorPrice;
                shieldCounter = 0;
            }
        }
        helmetIsBroken = false;
        swordIsBroken = false;
    }
    console.log(`Gladiator expenses: ${moneySpent.toFixed(2)} aureus`)
}
