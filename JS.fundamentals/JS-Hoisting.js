// 1
console.log(hello);                                   
var hello = 'world';                                 
//prediction- will print "undefined"
//compare-guessed it right


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//prediction- will print "magnet"
//compare-guessed it right(haystack got replaced by magnet)


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// console.log(brendan);
//prediction- will print "only okay"
//compare-printed "super cool" (thought it would be like top example)


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//prediction-"chicken" will get printed first, then "half-chicken"
//compare-guessed it right


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);
//prediction-some kind of error
//compare-i knew there was something off about mean()  (console says mean is not a function)


// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
// console.log(genre);
//prediction- will print "genre is undefined", "rock", "r&b", "r&b"
//compare-guess it right except last part. thought it would log last genre but it went back to the top and called on genre which is "disco"



// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
// console.log(dojo);
//prediction- will print "san jose", "seattle", "burbank", "san jose"
//compare-guessed it right


// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//prediction-will print "Chicago, 65", "Berkeley, 0", "true", "closed for now"
//compare-printed first makeDojo but not in the way i thought, didnt even get to second makeDojo
