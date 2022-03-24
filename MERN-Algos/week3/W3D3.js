class MinHeap{
    constructor(){
        this.heap =[null];
    }
    add(val){
        this.heap.push(val);
        this.shiftUp();
    }
    shiftUp(){
        let currentIndex = this.heap.length -1; 
        let parentIndex = Math.floor(currentIndex/2);

        console.log(this.heap);

        //while parent value is bigger and currentIndex is not 1
            // swap values
            // set currentIndex to parentIndex
            // find parent of currentIndex
        while(this.heap[parentIndex] > this.heap[currentIndex] && currentIndex !== 1){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
    min(){
        return this.heap.length < 2 ? null : this.heap[1]
    }
}

const myHeap = new MinHeap();

myHeap.add(4);
myHeap.add(18);
myHeap.add(90);
myHeap.add(2000);
myHeap.add(3);
myHeap.add(2);
myHeap.add(17);
myHeap.add(16);
myHeap.add(18);
myHeap.add(0.1);
myHeap.add(2);
myHeap.add(4.8);
myHeap.add(93);
myHeap.add(1);
console.log(myHeap.min());