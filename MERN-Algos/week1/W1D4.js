// ARRAY PARTITION

//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3


const partition = (arr) => {
    let pivot = 0
    // loop throught array with i
    for(let i = 1; i < arr.length; i++){
        // if value at i is < pivot value
        if(arr[i] < arr[pivot]){
            console.log("move this value backward: " + arr[i]);
            // loop, start at i, j > pivot, j--
            for(let j = i; j > pivot; j--){
                console.log(j);
                // swap with value before the index
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
            pivot++;
            console.log(arr);
        }  
    }
    console.log("pivot value: " + arr[pivot]);
    
    return arr;
}


//should return [4,2,3,5,9,5]

console.log(partition([5,4,9,2,5,3,6,1]));
//should return [4,7]
// console.log(partition([7,4]));
//should return [2,1,3,4,5]
// console.log(partition([3,5,1,2,4]));
// console.log(partition([7,2,10,15,1]));






// thomas solution-----------------------------------------------------------

// const partition = (arr) => { //O(N)
//     if(arr.length <= 1){
//         return arr;
//     }
//     let pivot = arr[0];

    
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[j] < pivot){
//             i++;
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
//     arr.splice(0,1);
//     arr.splice(i,0,pivot);
//     console.log("Pivot Index: " + (i));
//     return arr;
// }


// console.log(partition([50,51,30,12,200,100]));
// -----------------------------------------------------------------------------




// Lisa's solution-----------------------------------------------------------
// const parition = (arr) => {
//     var pivot = 0;
//     var runner = 1;

//     while(runner < arr.length ){
//         if(arr[pivot] > arr[runner]){
//             let lessVal = arr[runner];
//             arr.splice(runner,1);
//             arr.splice(0, 0, lessVal);
//             pivot++;
//         }
//         runner++; 
//         console.log(arr)   
//     }
//     return arr;
// }

// console.log(parition([5,100,1,4,9,2,10,5,3,-1]));

// -----------------------------------------------------------------------------