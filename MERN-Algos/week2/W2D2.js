// ROTATE STRING, IS ROTATION


//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    let newString = "";
    for(let i = 0; i < str.length; i++){
        console.log(`add this character: ${str[(i + str.length - num) % str.length]}`);
        newString = newString + str[(i + str.length - num) % str.length];
    }
    return newString;
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));


//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    for(let i = 0; i <= str1.length; i++){
        if(rotateString(str1, i) === str2){
            return true;
        }
    }
    return false;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
// console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));







// ---------------Lisa's code for first problem--------------
// const rotateString = (str, num) => {
//     var newString = "";
//     var rotate = str.length - 1;

//     for(let x = 0; x < str.length ;x++){
//         if(x >= str.length - num){
//             newString = str[rotate] + newString;
//             rotate--;
//         }else{
//             newString += str[x];
//         }
//     }
//     return newString;
// }


// let shoes = "Did I shine my shoes today?";
// console.log(rotateString(shoes, 9));