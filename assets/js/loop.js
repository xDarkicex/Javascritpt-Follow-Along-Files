// infinate loop

/*var a = 1;

while (a < 10) {
	console.log(a);
}*/

var a = 1; //counter verable also called index 

while (a < 10) {
	console.log(a);
	a++;
}

var b = 1; //counter verable also called index 
// do block will always happen once even if condition is false
do {
	console.log(b);
	b++;

} while (b < 10);


for (var c = 1; c < 8 ; c++) {

	console.log("winning");
	if (c == 5) {
		break;
	}	
} 

for (var d = 1; d < 50; d++){
	console.log(d);

	if (d % 5 == 0) {
		continue;
	}
}