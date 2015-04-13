//Qutes inside qoutes

//var phrase = 'Dont't mix your quotes.'; Bad
//var phrase = "Don't mix your quotes."; Good
//var phrase = "He said "that's fine," and left."; Bad
//var phrase = "He said \"that's fine,\" and left."; Good

var phrase = "This is a super simple string.";
var words = phrase.split(" ");
console.log(phrase.toUpperCase());
console.log(words);

var phrase1 = "Yet another phrase";
var segment = phrase1.slice(6,11);
console.log(segment);
//Reference 
//developer.mozilla.org/en/Javascript/Reference