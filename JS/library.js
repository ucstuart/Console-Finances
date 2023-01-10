// STUARTS LIBRARY OF FUNCTIONS AND BOILERPLATE CODE

export var url = 'https://bbc.co.uk';

// Global Variables used for the Library

export var environment; // To declare 'P' Production Environment 'T' Testing

export function printurl() {
    console.log(url);
}

export function setEnvironmentType(Env) {
    environment = Env;
    if (environment === "T") {
        console.log("Testing Environment")
    }
    }


export function getArrayLength(ArrayName) {
    console.log(ArrayName.length);
}

export var total = 0;

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

export var totalDifference =0;
export var monthIdentifier =0;
export var differenceArray = [monthIdentifier, totalDifference];

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
    
} 

export var MaxValueInArray = 0;

export function maxInArray(ArrayName, columnNumber) {

    // MaxValueInArray = Math.max(ArrayName[columnNumber]);
    // MaxValueInArray = ArrayName[2].Math.max();
    // console.log(Math.pow(ArrayName[columnNumber]));
    // console.log(MaxValueInArray);

    console.log("Array: "+ArrayName);
    console.log("Column Number: "+columnNumber);
    console.log("Max Value In Array: "+MaxValueInArray);

    var i = 0;

    console.log(i);

    for ( let i=0; i < ArrayName.length; i++ ) {
        if (ArrayName[columnNumber][i] > MaxValueInArray ) {
            console.log("Im In The For Statement!")
            console.log("Array Name: " +ArrayName);
            console.log("Column Number: " +columnNumber);
            console.log("I: "+i);
            console.log("Max Value in Array: "+MaxValueInArray);
            MaxValueInArray=ArrayName[columnNumber][i];
        }
    }

    console.log("Calculated by For Loop: "+MaxValueInArray);

    MaxValueInArray = Math.max.apply(0, ArrayName);

    console.log(MaxValueInArray);

}