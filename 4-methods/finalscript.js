/* Part 1 */
// let age = 10;

// let monthsSinceBirthday = 1;

// console.log("ageInMonths - A", calculateAgeInMonths());

// monthsSinceBirthday++;

// console.log("ageInMonths - B", calculateAgeInMonths());

// function calculateAgeInMonths() {
//     return age * 12 + monthsSinceBirthday;
// }

/* Part 2 */
let myAge = 34;
let yourAge = 25;

console.log("My age in months", calculateAgeInMonths(myAge));
console.log("Your age in months", calculateAgeInMonths(yourAge));

// console.log("Total ages in month", calculateTotalAgesInMonth(calculateAgeInMonths(myAge), calculateAgeInMonths(yourAge)));

let myAgeInMonths = calculateAgeInMonths(myAge);
let yourAgeInMonths = calculateAgeInMonths(yourAge);

console.log("Total ages in month", calculateTotalAgesInMonth(myAgeInMonths, yourAgeInMonths));



/*
    Methods
*/
function calculateTotalAgesInMonth(ageInMonthsOne, ageInMonthsTwo) {
    return ageInMonthsOne + ageInMonthsTwo;
}

function calculateAgeInMonths(age) {
    return age * 12;
}