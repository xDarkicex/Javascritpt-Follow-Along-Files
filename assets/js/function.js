//Best practice define functions before calling them, though it will work either way.
//()say expect data to be run through it parameters
function firstfunc (x, y){
	var mathandstuff = (x * y) + (2*x * 2*y);
	console.log("Answer:", mathandstuff);
	return mathandstuff;

}

firstfunc(2,2);
firstfunc(2,6+4+(2*-6));
firstfunc(20,-3.14);

var results = firstfunc(1,1);