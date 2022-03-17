// STRING TO WORD ARRAY, REVERSE WORD ORDER


//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let counter = 0;
    let strArr = [];
    while(counter < str.length){
        let strToAdd = "";
        while(str[counter] != " " && counter < str.length){
            strToAdd += str[counter]
            counter++;
        }
        counter++;
        if(strToAdd != ""){
            strArr.push(strToAdd);
        }
    }
    return strArr;
}

console.log(stringToWordArray("  Hello  world"));

// console.log(stringToWordArray("Did I shine my shoes today?"));
// console.log(stringToWordArray("Did I shine my shoes today?      "));
// console.log(stringToWordArray("two             words"));



//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let strArr = stringToWordArray(str);
    let newStr = "";
    for(let i = strArr.length - 1; i >= 0; i--){
        newStr += " " + strArr[i];
    }
    return newStr;
}

console.log(reverseWordOrder("This is a test"));
// console.log(reverseWordOrder("A man a plan a canal Panama"));






// ------------------Lisa's code---------------------------------------

// const stringToWordArray = (str) => {
//     var newArr = [];
//     var word = "";

//     for(let i = 0; i < str.length; i++){
//         if(str[i] === " " && word.length != 0){
//             newArr.push(word);
//             word = "";
//         }else if(str[i] != " "){
//             word += str[i];
//         }
//     }

//     if(word.length != 0){
//         newArr.push(word);
//     }

//     return newArr;
// }
// console.log(stringToWordArray("Did I shine my shoes today?"));



// const reverseWordOrder = (str) => {
//     var newArr = stringToWordArray(str);
//     var newNewArr = "";

//     for(let j = newArr.length - 1; j >= 0; j--){
//         newNewArr +=  newArr[j] + ' ';
//     }

//     return newNewArr;
// }


// console.log(reverseWordOrder("This is a test"));