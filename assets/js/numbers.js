//Numbers


//Javascript numbers are 64-bit Floating point numbers
//http://en.wikipedia.org/wiki/Half-precision_floating-point_format

var x = 200;

var foo = 5;
var bar = 5;

console.log(foo + bar); 

var foo = "5";
var bar = "5";
console.log(foo + bar);

//false
//var foo = 5;
//var bar = "b";
//console.log(foo * bar); 
//NaN Not a number nonsense!!!

var foo = "hi";
var mynumber = Number(foo);

if( !isNaN(mynumber) ){
	console.log("It is a number");
} else{

	console.log("It's not a number!");

}

var x = 200.6;
var y = Math.round(x);
console.log(y);