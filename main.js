"use strict";
//   🚀 Day 20 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//  Question 58:
//   Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// calculates the average of all scores which are given
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(70, 88, 90, 95)); // Shows the average score
// We add up all the scores, then divide by how many there are.
// Question 59
// Add a Special Number: Make a program that creates custom adders.
// These adders can add a specific number to any other number you give them later.
// This program makes a function that adds a specific number
function addNumber(valueToAdd) {
    //It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 4
let addFive = addNumber(4);
console.log(addFive(5)); // If we put 5 in the box, it gives us 9
// Question 60
//Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let user = {
    name: "Muhammad Saad",
    age: 16
};
function profile(user) {
    console.log(`My name is ${user.name} and I am ${user.age} years old`);
}
profile(user);
