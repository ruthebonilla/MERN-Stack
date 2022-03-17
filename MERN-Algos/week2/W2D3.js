// STRING DEDUPE


//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    const dedupe = (str) => {
        const letters = {};
        let newStr = "";
        for(let i = str.length - 1; i >= 0; i--){
            if(!letters[str[i]]){
                console.log(`found new letter: ${str[i]}`);
                newStr = str[i] + newStr;
                letters[str[i]] = true;
            }
            else{
                console.log(`found old letter: ${str[i]}`);
            }
        }
        console.log(letters);
        return newStr;
    }
    
    console.log(dedupe("Snaps! crackles! pops!"));
}


console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));




// ---------Jared's code (keeps all first instance)----------------------
// const dedupe =  (str) => {
//     const newString = [...new Set(str)].join('');

//     return newString

// }

// console.log(dedupe("Snaps! crackles! pops!"));






// ---------------------eric's code (unique)-----------------------
// remove duplicates of characters//
// keeps only last inistance//

// const dedupe = (str) => {
//     var charChecker = [];
//     for (var i = str.length - 1; i >= 0; i--) {
//       // if char hasn't been seen define it as seen
//       // do this at charChecker index equals ascii of the char
//         if (charChecker[str.charCodeAt(i)] == null) {
//             charChecker[str.charCodeAt(i)] = 1;
//         }
//         // else remove that char from str
//         else {
//             str = str.substring(0, i) + str.substring(i + 1, str.lenght);
//         }
//         }
//         return str;
//     };
    
//     s = [
//         "Snaps! crackles! pops!",
//         "Did  I shine my shoes today?",
//         "scoop dedupe!",
//         "aabbccddeeff112233  aabbcc",
//     ];
//     for (var i = 0; i < s.length; i++) {
//         console.log(dedupe(s[i]));
//     }