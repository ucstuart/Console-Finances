// SCRIPT FOR THE PROJECT

// IMPORT STUARTS FUNCTION LIBRARY

import {
    // Variables
    url,
    environment,
    total,
    totalDifference,
    MaxValueInArray,
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

console.log("Number of Months:");
getArrayLength(finances); // Get and Console Log the Length of the Array Finances

getSumOfArray(finances, 1);

console.log("Total amount of Profit/Losses");
console.log(total);

getDifferenceBetweenRowsOfArray(finances, 1, 0);

maxInArray(finances,1);







