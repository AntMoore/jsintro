/* Step 1 */
// let answer = prompt("Do you want tacos or burittos?");

// if (answer == "tacos") {
//     console.log("🌮🌮🌮🌮🌮🌮🌮🌮🌮");
// } else {
//     console.log("🌯🌯🌯🌯🌯🌯🌯🌯🌯");
// }

// if (answer == "tacos") {
//     console.log("🌮🌮🌮🌮🌮🌮🌮🌮🌮");
// } else if (answer == "burritos") {
//     console.log("🌯🌯🌯🌯🌯🌯🌯🌯🌯");
// } else {
//     console.log("😒 - tacos or burritos only!");
// }

/* Step 2 */
// let foodAnswer = prompt("Do you want tacos or burittos?");
// let drinkAnswer = prompt("Coffee or water?");

// let response = "I don't know what you want from me";

// if (foodAnswer == "tacos" && drinkAnswer == "coffee") {
//     response = "🌮 🍵";
// } else if (foodAnswer == "tacos" && drinkAnswer == "water") {
//     response = "🌮 🥤";
// } else if (foodAnswer == "burritos" && drinkAnswer == "coffee") {
//     response = "🌯 🍵";
// } else if (foodAnswer == "burritos" && drinkAnswer == "water") {
//     response = "🌯 🥤";
// }

// console.log("response", response);

// let answer = prompt("tea, coffee, or water?");

// if (answer == "tea" || answer == "coffee") {
//     console.log("That will be £1.50 please");
// } else {
//     console.log("no cost");
// }

// let drinkAnswer = prompt("tea, coffee, or water?");
// let foodAnswer = prompt("do you want a sandwich?");

// if ((drinkAnswer == "tea" || drinkAnswer == "coffee") && foodAnswer == "yes") {
//     console.log("That will be £3.00 please");
// } else if ((drinkAnswer == "tea" || drinkAnswer == "coffee" && foodAnswer == "no")) {
//     console.log("That will be £1.50 please");
// } else if (foodAnswer == "yes") {
//     console.log("That will be £2.00 please");
// } else {
//     console.log("no cost");
// }

/* Step 3 */
let drinkAnswer = prompt("tea, coffee, or water?");
let foodAnswer = prompt("do you want a sandwich?");

let hasCostedDrink = (drinkAnswer == "tea" || drinkAnswer == "coffee");
console.log("hasCostedDrink", hasCostedDrink);

let hasSandwich = (foodAnswer == "yes");

let cost = 0;

if (hasCostedDrink) {
    cost += 1.50;
}

if (hasSandwich) {
    cost += 2.00;
}

if (hasSandwich && hasCostedDrink) {
    cost -= 0.50;
}

console.log(`That will be £${cost} please`);