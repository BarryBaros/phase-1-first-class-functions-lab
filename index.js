// Code your solution in this file!
// Returns a new array containing the first two drivers from the passed-in array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2); //we start slicing from index 0 (the first element) and stop at index 2, but not including index 
};
console.log(returnFirstTwoDrivers(drivers));

// Returns a new array containing the last two drivers from the passed-in array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2); //The parameter -2 indicates that we want to start slicing from the second-to-last element of the array. Negative indices count backward from the end of the array.
}
console.log(returnLastTwoDrivers(drivers));

//SelectingDrivers holds references to two functions: one that returns the first two drivers and another that returns the last two drivers. This array can now be used to pass these functions around as a single unit.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fare) {
    return function (numberOfRides) {
        return fare * numberOfRides;
    }
} 


// Declare fareDoubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2); // Now fareDoubler is a function that doubles the fare

// Declare fareTripler using createFareMultiplier
const fareTripler = createFareMultiplier(3); // Now fareTripler is a function that triples the fare

// Define selectDifferentDrivers function
function selectDifferentDrivers(arrayNames, firstOrLastDrivers) {
    return firstOrLastDrivers(arrayNames);    // Return the result of calling firstOrLastDrivers with arrayNames
}
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));