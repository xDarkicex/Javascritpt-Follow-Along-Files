function calculateloan (amount, month, interest){
	var monthlycost = ((interest * amount)/(1 - (Math.pow(1/(1 + interest), month))))
	console.log("answer:", monthlycost);
}

calculateloan(10,2,0.01);
calculateloan(12000,72,0.065);