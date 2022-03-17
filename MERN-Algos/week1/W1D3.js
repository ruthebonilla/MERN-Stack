// MERGE SORT

//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let j = 0;
    for (let i = 0; i < leftArr.length; i++){
        while(rightArr[j] < leftArr[i] || rightArr[j] == leftArr[i]){
            leftArr.splice(i,0,rightArr[j]);
            leftArr.splice()
            j++
        }
    }
    leftArr.push(...rightArr.slice(j));
    return leftArr;
}

// should return [0,1,2,3,4,6,7,9,11]
console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));





// //////////////////////////TA Explained//////////////////////////////////
function combine(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}
function mergeSort(array) {
    const half = Math.floor(array.length / 2)
    // Base case or terminating case
    if (array.length < 2) {
        return array
    }
    //using splice dont have to specify the right the rest of the array will be right
    const left = array.splice(0, half)
    return combine(mergeSort(left), mergeSort(array))
}




console.log(combine([1,2,7,9],[0,3,4,6,11]));
