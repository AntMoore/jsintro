let age = 34;

let monthsSinceBirthday = 1;
let ageInMonths = age * 12 + monthsSinceBirthday;

console.log("ageInMonths - A", ageInMonths);

// monthsSinceBirthday = monthsSinceBirthday + 1;
// monthsSinceBirthday += 1;
monthsSinceBirthday++;

console.log("ageInMonths - B", ageInMonths);

ageInMonths = age * 12 + monthsSinceBirthday;

console.log("ageInMonths - C", ageInMonths);

/////////////////////////////////////////

let firstName = "Antonio";
let surname = "Moore";

console.log("fullName", firstName + surname);
console.log("fullName", firstName + " " + surname);
console.log("fullName", `${firstName} ${surname}`);