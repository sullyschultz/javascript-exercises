let stringText = "hey";


const repeatString = function(stringText, num) {
    if (num == 3) {
     return stringText.repeat(num);
    }
    else if (num == 10) {
     return stringText.repeat(num);
    }
    else if (num == 1) {
        return stringText.repeat(num);
    }
    else if (num == 0 || stringText == "") {
        return "";
    }
    else if (num <= -1) {
        return "ERROR";
    }
    else {
        return stringText.repeat(num)
    }

};

// Do not edit below this line
module.exports = repeatString;

