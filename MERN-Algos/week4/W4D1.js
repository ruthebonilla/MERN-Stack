// BINARY TO DECIMAL
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21
function binaryToDecimal(binary) {
  //decimal is what we'll return, exponent will help us keep track of what power we are on
  let decimal = 0;
  let exponent = 0;
  //for loop starting at right side of string going backwards
  for (let i= binary.length-1; i>=0; i--){
    if (binary[i]== 0){
      exponent++;
      continue;
    }
    else if (binary[i]==1){
      //math.pow has base, then exponent as parameters
      decimal += Math.pow(2, exponent)
      exponent++;
      //console.log(decimal)
    }
  }
  return decimal
}
console.log(binaryToDecimal("100"))
  


  // DECIMAL TO BINARY
  // Given a (whole) number, return the value in binary
  function decimalToBinary(decimal) {
    let str = "";
    while (decimal > 0) {
      const char = decimal % 2;
      decimal = Math.floor(decimal / 2);
      str = char + str;
    }
    return "0b" + str;
  }

  console.log(decimalToBinary("109")); //should retrurn 1101101
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"
  
  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work