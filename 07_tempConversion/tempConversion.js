const convertToCelsius = function(f, c) {
  c = ((f-32) * 5 / 9);
  const resultC = Math.round(c * 10) / 10;
  return resultC;


};

const convertToFahrenheit = function(c, f) {
  f = (c * 9) / 5 + 32;
  const resultF = Math.round(f * 10) / 10;
  return resultF;



  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
