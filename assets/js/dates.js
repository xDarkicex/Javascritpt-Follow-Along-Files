//Working with dates

var today = new Date();
//today.getFullYear();

//build your own date
//var settime = new Date(2015,3,14); month is 0 based meaning that it starts at 0 and goes to 11


console.log(today);

var mybirthday = new Date (1991, 9, 17);
console.log("Gentrys Birthday was  on:", mybirthday.getDay());
//.getDay() is 0-6 0 being sunday

var Entered = new Date (1974, 10, 24);
var Stored = new Date (1974, 10, 24);

// if (date1 == date2) {} false because the objects are differnt even if the contnet its the same the wrapper is different
if (Entered.getTime() == Stored.getTime()){
	console.log("Verified.");
} else {
	console.log("Mismatch Dates!")
}