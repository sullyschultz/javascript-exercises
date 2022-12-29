const add = function(numOne, numTwo) {
  const result = (numOne + numTwo);
  return result;
	
};

const subtract = function(numOne, numTwo) {
  let result =(numOne - numTwo);
  return result;
	
};

const sum = function(array) {
  
  const initialValue = 0;
  const totalValue = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue);
    return totalValue;
  };


const multiply = function(array) {

  let initialValue = 1;
  const totalValue = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue);
    return totalValue;
};

const power = function(numOne, numTwo) {
  let total = Math.pow(numOne, numTwo);
  return total;
	
};

const factorial = function(num) {
 if (num === 0) {
  return 1;
  } else {
    return num * factorial(num - 1);
  }
 
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
