/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow is more beefy!")
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log("Equaly strong!")
}else{
    console.log("Jamie is the og")
}

let jonSnowHealth = 100
let jonSnowDefense = 0
if (jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain!")
}else{
    console.log("Jon Snow's health is down to" + (jonSnowHealth))
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain!")
}else{
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log("Jon Snow's health is down to" + (jonSnowHealth));
}

if (jonSnowHealth + 50 >= 100){
    jonSnowHealth = 100
}else{
    jonSnowHealth += 50
}
console.log(jonSnowHealth)

let coinLandsHeads = true;

if (coinLandsHeads){
    console.log("The fight continues!")
}else{
    console.log("Jon is allowed to run away!")
}

for (let i=0; i < 5; i++){
    if(jonSnowHealth <= 0){
        console.log("Jon Snow has been slain!")
    }else{
        jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
        console.log("Jon Snow's health is now" + (jonSnowHealth))
    }
}

while(jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    if(jonSnowHealth <= 0){
        console.log("Jon Snow has been slain!")
    }else{
        console.log("Jon Snow's health is now" + (jonSnowHealth))
    }
}

if(jonSnowAttack > 25 && jonSnowAttack < 75){
    console.log("Jon Snow is at average strength")
}

if (jamieLannisterAttack < 25 || jamieLannisterAttack > 75){
    console.log("Jamie is a wildcard")
}else{
    console.log("Jamie is at average strength")
}

