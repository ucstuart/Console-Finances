// SCRIPT FOR THE PROJECT

// IMPORT STUARTS FUNCTION LIBRARY

import {
    // Variables
    url,
    environment,
    total,
    totalDifference,
    MaxValueInArray,
    // Arrays
    differenceArray,
    // Functions
    printurl,
    getArrayLength,
    setEnvironmentType,
    getSumOfArray,
    getDifferenceBetweenRowsOfArray,
    maxInArray
} from './library.js';

// IMPORT THE DATA FOR THE PROJECT

import {
    finances
} from './index.js';


setEnvironmentType("P"); // Set Environment Type 'T' Test or 'P' Production

// DISPLAY NUMBER OF MONTHS - THIS WORKS

console.log("Number of Months:");
getArrayLength(finances); // Get and Console Log the Length of the Array Finances

// DISPLAY THE SUM OF THE ARRAY - THIS WORKS

getSumOfArray(finances, 1);

console.log("Total amount of Profit/Losses");
console.log(total);

// DISPLAY THE TOTAL DIFFERENCE AND AVERAGE IT AND CONVERT TO 2DP 0.00 - THIS WORKS (BUT IS NOT TECHNICALLY CORRECT)

getDifferenceBetweenRowsOfArray(finances, 1, 0);


// Get the Max Value in the Array - THIS DOES NOT WORK 
maxInArray(differenceArray,1);



// Testing in Core Script To Remove After Testing 
// console.log(Math.max(finances[1]));









