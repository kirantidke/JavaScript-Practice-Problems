/*
        //hoisting:-moving all declarations to the top of the current scope

        var x;  //declare x
        x = 5;  //assign 5 to x
        console.log(x);
        console.log(y);

         var y=10;
    */


console.log(x);
var x;
x = 5;
console.log(x);

console.log(y);
var y = 10;
console.log(y);


display();
function display() {
        console.log('I did it!');
}

function sum(){
        console.log(sum);
        var sum = x + y;
        console.log(sum);
}
function mul(){
        console.log(mul);
        var mul = x * y;
        console.log(mul);
}
function div(){
        console.log(div);
        var div = x / y;
        console.log(div);
}

sum();
mul();
div();

/*
show(); // Uncaught TypeError: functionVar is not a function
var show = function () {
        console.log('I did it!');
}
*/
