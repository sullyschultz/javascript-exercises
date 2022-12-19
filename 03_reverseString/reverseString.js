let stringText = "Hello";
const reverseString = function(stringText) {
    let stringSplit = stringText.split("");
    let reverseArray = stringSplit.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    

};

// Do not edit below this line
module.exports = reverseString;
