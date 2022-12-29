const palindromes = function (str) {
    let regExp = /[^a-z]/g;
    let lowRegString = str.toLowerCase().replace(regExp, "");
    let reverseString = lowRegString.split("").reverse().join("");

    return reverseString == lowRegString;
    
};

// Do not edit below this line
module.exports = palindromes;
