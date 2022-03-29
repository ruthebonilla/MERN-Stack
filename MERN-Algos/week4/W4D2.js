//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    power = 0
    decimal = 0
    var obj = {
        A : 10,
        B: 11,
        C: 12,
        D : 13,
        E : 14,
        F: 15,
    }
    for (var i = str.length-1; i >= 0; i--) { 
        if(str[i] in obj) {
            decimal += obj[str[i]] * Math.pow(16, power);
            power++;
        } else {
            decimal += parseInt(str[i]) * Math.pow(16, power);
            power++;
        }
        //console.log(decimal)
    }
    return decimal;
}

console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHex = num => {
    let remainder= 0
    let hexString = ""

    let map = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }

    while ( num > 0 ) {
        remainder = ( num % 16 )
        num = Math.floor( num / 16 )
        console.log("Remainder is: ", remainder, " Qoutient is: ", num);
        if ( remainder >= 0 && remainder <= 9 ) hexString = remainder + hexString
        if ( remainder >= 10 && remainder <= 15 ) hexString = map[ remainder ] + hexString
        console.log("This is now my hexString: , ", hexString);
    }
    return hexString
}

console.log(decToHex(420));

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));