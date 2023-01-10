// STUARTS LIBRARY OF FUNCTIONS AND BOILERPLATE CODE



export var url = 'https://bbc.co.uk'; // this is not used for this project but used for testing libraries, import and export. 

// Global Variables used for the Library

export var environment; // To declare 'P' Production Environment 'T' Testing

// This Function is not used within this project. 

export function printurl() {
    console.log(url);
}


// This function sets the environment, P production T testing, and if testing is set, there will be more output within the console to aid debugging, and if a particular element is required to out put this can be turned on for that section. 

export function setEnvironmentType(Env) {
    environment = Env;
    if (environment === "T") {
        console.log("Testing Environment")
    }
    }


// This function gets the length (number of rows) of an array
// input (arrayname)
// output to console the length

export function getArrayLength(ArrayName) {
    console.log(ArrayName.length);
}

// Variables for getSumOfArray

export var total = 0;

// This function getSumOfArray gets the sum of an arrays, specific columnNumber.
// input (arrayname, columnumber)
// output total variable - the total is saved in a variable called total.

export function getSumOfArray(ArrayName, columnNumber) {
    
    
    var months = ArrayName.length;

    for ( let i = 0; i < months; i++) {
        total += ArrayName[i][columnNumber];

        if (environment === "T") {
            console.log("Row Number: "+i);
            console.log("Column Number: "+columnNumber);
            console.log("Total: "+total);
        }
        
    }

}

// Declares variables for the getDifferenceBetweenRowsofArray function

export var totalDifference =0;
export var monthIdentifier =0;
export var differenceArray = [monthIdentifier, totalDifference];

// Function getDifferenceBetweenRowsOfArray, this function calculates the difference between a previous row, and a current row, of a given array, of a given column.
// input (arrayname, columnnumber, labelcolumnumber) - the label column number is the collum with the data label in it, in this case the Month Name and Year. 
// output variable roundednewdiff (rounded difference) to the console

export function getDifferenceBetweenRowsOfArray (ArrayName, columnNumber, labelColumnNumber) {

    var months = ArrayName.length;
    
    if (environment === "T") {
        console.log("Months: "+months);
    }
    

    var previousMonth = 0;
    var totalDifference = 0;

    previousMonth = ArrayName[0][columnNumber];
    
    if (environment === "T") {
        console.log("Previous Month: "+previousMonth);
    }
        
    for ( let j = 0; j < months; j++) {
        

        // this part does not work correctly - but gets the right result - i have found this during testing and havent had the time to review and fix. 

        totalDifference = ArrayName[j][columnNumber] - ArrayName[0][columnNumber];          
                
        var monthIdentifier = ArrayName[j][labelColumnNumber];
        
        if (environment === "T") {
            console.log("Month Identifier: "+monthIdentifier);
            console.log("Label Column Number: "+labelColumnNumber);
        }
        
        differenceArray = [monthIdentifier, totalDifference];
        
        if (environment === "T") {
            console.log("New Array Containing Differences");
            console.log(differenceArray);
        }
          
    }
    
    if (environment === "T") {
        console.log("Total Difference Before Rounding");
        console.log(totalDifference / 85);
    
    }

    var newdiff = 0;
    var RoundedNewdiff = 0;
    newdiff = totalDifference /85;
    RoundedNewdiff = newdiff.toFixed(2);
    console.log("Average of the Changes in the Profit / Loss for the Period")
    console.log(RoundedNewdiff);

    if (environment==="T") {
        console.log("Difference Array is only showing one entry??");
        console.log("Difference Array:" + differenceArray);

    }
} 


// These sections are attemps at the MaxValueInArray function - this does not yet work, and is because the above array didnt work correctly, but I only found this during testing, and havent had the time to complete the review and resolve. 


export var MaxValueInArray = 0;

import {
        finances
    } from './index.js';

export function maxInArray(ArrayName, columnNumber) {

    


    // TRYING ANOTHER WAY

    // MaxValueInArray = Math.max(ArrayName[columnNumber]);
    // MaxValueInArray = ArrayName[2].Math.max();
    // console.log(Math.pow(ArrayName[columnNumber]));
    // console.log(MaxValueInArray);


    // ATTEMPT 2

    // console.log("Array: "+ArrayName);
    // console.log("Column Number: "+columnNumber);
    // console.log("Max Value In Array: "+MaxValueInArray);

    // var i = 0;

    // console.log(i);

    // for ( let i=0; i < ArrayName.length; i++ ) {
    //     if (ArrayName[columnNumber][i] > MaxValueInArray ) {
    //         console.log("Im In The For Statement!")
    //         console.log("Array Name: " +ArrayName);
    //         console.log("Column Number: " +columnNumber);
    //         console.log("I: "+i);
    //         console.log("Max Value in Array: "+MaxValueInArray);
    //         MaxValueInArray=ArrayName[columnNumber][i];
    //     }
    // }

    // console.log("Calculated by For Loop: "+MaxValueInArray);

    // MaxValueInArray = Math.max.apply(0, ArrayName);

    // console.log(MaxValueInArray);


    // ATTEMPT 3



    if (environment="T") {
        console.log("TESTING OUTPUT START");
        console.log("Array Name: "+ArrayName);
        console.log("Column Number: "+columnNumber);
        console.log("Max Value In Array at Start: "+MaxValueInArray);
        console.log("TESTING OUTPUT END");
    }

    let n =0;

    // console.log("Difference Array"+differenceArray);
    // console.log("Finances Array"+finances);

    differenceArray.forEach(n => console.log(n[1]));


}