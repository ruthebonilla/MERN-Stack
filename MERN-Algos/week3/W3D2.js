// UNION SORTED ARRAYS
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const unionSorted = (arrLeft,arrRight) => {
    var union  = [];
    var iLeft =  0;
    var iRight = 0;

    while(iLeft <= arrLeft.length - 1){
        if(arrLeft[iLeft] === arrRight[iRight]){
            union.push(arrLeft[iLeft])
            iLeft++;
            iRight++;
        }else if(arrLeft[iLeft] >  arrRight[iRight]){

            union.push(arrRight[iRight]);
            iRight++;
        }else{
            union.push(arrLeft[iLeft]);
            iLeft++;
        }
    }
    while(iRight <= arrRight.length -1){
        union.push(arrRight[iRight]);
        ++iRight;
    }
    return union;
}

//console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
// console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
console.log(unionSorted([1,5,9],[2,6,10]));



//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (leftArr,rightArr) => {
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));




// different solutions from classmates-----------------------------------------------------------------------

// const unionSorted = (arrLeft, arrRight) => {
//     let newArr = [];
//     let rightPointer = 0;
//     for(let i = 0; i < arrLeft.length; i++){
//         let leftValue = arrLeft[i];

//         //arrRight will "catch up" to the value of arrLeft at index i.
//         while(arrRight[rightPointer] < leftValue && rightPointer < arrRight.length){
//             let rightVal = arrRight[rightPointer];
//             if(arrRight[rightPointer] == rightVal){}
//             while(arrRight[rightPointer] == rightVal){
//                 newArr.push(arrRight[rightPointer]);
//                 rightPointer++;
//             }
//             // if(added[arrRight[rightPointer]] != 1){
//             //     added[arrRight[rightPointer]] = 1;
//             //     newArr.push(arrRight[rightPointer]);
//             // }
//         }
        
//         //If the arrays have equal values, we want to find which array has more of those values. We take whichever has more 
//         //of them and then push that number of the values into the new array.
//         if(arrRight[rightPointer] == leftValue){
//             let rightCount = 0;
//             let leftCount = 0;
//             while(arrRight[rightPointer] == leftValue && rightPointer < arrRight.length){
//                 rightCount++;
//                 rightPointer++;
//             }
//             while(arrLeft[i] == leftValue && i < arrLeft.length){
//                 leftCount++;
//                 i++;
//             }
//             i--;

//             greaterNum = rightCount; //Initially setting the greater count to the number of times the value appears in the right array
//             if(rightCount < leftCount){
//                 greaterNum = leftCount
//             } else if(rightCount == leftCount){
//                 greaterNum = 1;
//             }
//             for(let j = 1; j <= greaterNum; j++){
//                 newArr.push(leftValue);
//             }
//         } else{
//             newArr.push(leftValue);
//         }
//     }
//     while(rightPointer < arrRight.length){
//         newArr.push(arrRight[rightPointer]);
//         rightPointer++;
//     }
//     return newArr;
// }

// console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
// -----------------------------------------------------------------------------------


// const unionSorted = (arrA, arrB) => {
//     let arr1 = [...arrA];
//     let arr2 = [...arrB];
//     let x=0;
//     let y=0;
//     let out = [];
//     while(x<arr1.length || y<arr2.length){
//         if(x<arr1.length && y<arr2.length){
//             if(arr1[x]<arr2[y]){
//                 out[out.length] = arr1[x];
//                 x++;
//             }
//             else if(arr1[x]>arr2[y]){
//                 out[out.length] = arr2[y];
//                 y++;
//             }
//             else{
//                 out[out.length] = arr1[x];
//                 x++;
//                 y++;
//             }
//         }
//         else if(x<arr1.length){
//             out[out.length] = arr1[x];
//             x++;
//         }
//         else if(y<arr2.length){
//             out[out.length] = arr2[y];
//             y++;
//         }
//     }
//     return out;
// }

// console.log(unionSorted([2,4,7,9,10],[2,2,3,5,7,9,10])); // Expected: [2, 2, 3, 4, 5, 7, 9, 10]
// console.log(unionSorted([1,1,4,5,8],[1,1,1,5,6,8])); // Expected: [1, 1, 1, 4, 5, 6, 8]
// console.log(unionSorted([1,3,5,7,9],[2,4,6,8,10])); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(unionSorted([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7])); // Expected: [-9, -5, -5, 0, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 7]

// ///////////////
// const unionUnsorted = (arrA, arrB) => {
//     let arr1 = [...arrA];
//     let arr2 = [...arrB];

//     for(let i=0;i<arr2.length;i++){
//         let foundIndex = getIndex(arr1,arr2[i]);
//         if(foundIndex!==-1){
//             arr1 = removeVal(arr1,foundIndex);
//         }
//     }
//     return concatCustom(arr1,arr2);
// }

// const getIndex = (arr, val) => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==val){
//             return i;
//         }
//     }
//     return -1;
// }
// const removeVal = (arr, ind) => {
//     let out = [];
//     for(let i=0;i<arr.length;i++){
//         if(i!=ind){
//             out[out.length] = arr[i];
//         }
//     }
//     return out;
// }
// const concatCustom = (arr1, arr2) => {
//     for(let i=0;i<arr2.length;i++){
//         arr1[arr1.length] = arr2[i];
//     }
//     return arr1;
// }

// console.log(unionUnsorted([2,7,2,1,2],[6,7,2,7,6,2])); // Expected: [1,2,6,7,2,7,6,2]
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2])); // Expected: [1,3,10,2,7,9,5,2]
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6])); // Expected: [1,2,2,2,6,7,6]
