// BUBBLE SORT
function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        swapped = false;
        for(var i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                swapped = true;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}


let arr = [5,4,2,6,8,14,1,3,20,-5,24];
console.log(arr);
console.log(bubbleSort(arr));


// ///////////////////////////////////////////////////
// SELECTION SORT
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr);
        console.log(`checking to find the ${i+1}th smallest value`);
        var mindex = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[mindex]){
                mindex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }

    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));