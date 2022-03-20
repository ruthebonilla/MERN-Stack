//IS PANGRAM, IS PERFECT PANGRAM

//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    let UpStr = str.toUpperCase();
    console.log(UpStr);
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(UpStr.includes(alphabet[j])) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}


console.log(isPangram("waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));



//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    var pangram = {};

    str = str.toUpperCase();
    for(let i=0; i<str.length; i++){
        if(!pangram[str[i]] && str[i] >= "A" && str[i] <= "Z"){
            pangram[str[i]] = true
        }else if(pangram[str[i]]){
            // if letter already in pangram, return false
            return false
        }
    }

    return Object.keys(pangram).length === 26 ? true : false; 
}

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
console.log(isPerfectPangram("The five boxing wizards jump quickly."))






// different solutions from classmates

// (isPangram)===========================================================================================
// const isPangram = (str) => {
//     var alphabet={A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0,T:0,U:0,V:0,W:0,X:0,Y:0,Z:0}
//     var newStr =str.toUpperCase();
//     for (i=0; i<newStr.length; i++){
//         if(newStr[i] >="A" && newStr[i] <="Z"){
//             alphabet[newStr[i]]++
//         }
//     }console.log(alphabet)
//     var akeys=Object.keys(alphabet)
//     for(i=0; i<akeys.length -1; i++){
//         if (alphabet[akeys[i]]==0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPangram("waxy and quivering, jocks fumble the pizza."));//returns true
//=========================================================================================================



// (both)==================================================================================================
// let LETTER_REGEX = /^[A-Za-z]$/; //regex to check if char is a letter

// const isPangram = (str) => {
//     let letters = {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
//     for(let i=0;i<str.length;i++){
//         if(str[i].match(LETTER_REGEX)){
//             letters[str[i].toLowerCase()] && delete letters[str[i].toLowerCase()];
//         }
//     }
//     return (Object.keys(letters).length ? false : true);
// }
// console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false


// const isPerfectPangram = (str) => {
//     let letters = {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
//     for(let i=0;i<str.length;i++){
//         if(str[i].match(LETTER_REGEX)){
//             letters[str[i].toLowerCase()]===1 ? delete letters[str[i].toLowerCase()] : letters[str[i].toLowerCase()]=-1
//         }
//     }
//     return (Object.keys(letters).length ? false : true);
// }
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
//===========================================================================================================





