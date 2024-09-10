
let weight = parseInt(prompt("What is your weight"));
let height_ft = parseInt(prompt("What is your height - feet"));
let height_in = parseInt(prompt("What is your height - inches"));
let age = parseInt(prompt("What is your age"));
let gender = prompt("What is your gender: (F for female and M for male");

let calorie_calc;

if (gender === "F") {
 calorie_calc = 65.51 + (9.563 * (weight * 0.453592)) + (1.850 * ((height_ft * 30.48) + (height_in * 2.54))) - (4.676 * age);
} else {
 calorie_calc = 66.47 + (13.75 * (weight * 0.453592)) + (5.003 * ((height_ft * 30.48) + (height_in * 2.54))) - (6.755 * age);
}

console.log(calorie_calc);


