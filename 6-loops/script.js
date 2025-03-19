let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
// console.log("months", months);

// for (let index = 0; index < months.length; index++) {
//     const month = months[index];
//     console.log(month);
// }

// for (let month of months) {
//     console.log(month);
// }

// months.forEach((month) => {
//     console.log(month);
// });

months.forEach((month, i) => {
    console.log(`${month} - ${i}`);
});