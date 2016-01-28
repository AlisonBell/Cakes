function countE () {
	var phrase = prompt("Which phrase woud you like to examine");
	if (typeof(phrase) != "string") {
		alert("That is not a valid entry");
		return false;
	} else {
		var eCount = 0;
		for (var index = 0; index < phrase.length; index++){
			if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
			eCount ++;
		}
	}
	alert("There are " + eCount + " E's in \"" + phrase + "\".");
	return true;
}

//Call the function:
>countE ()




/*

var gotName = false;
while(gotName == false){
	var userName = prompt("Whats your name?");
	if ( confirm("Are you sure your name is " + userName + "?") ){
		alert("Hello " + userName + "!");
		gotName = true;
	}
}

*/

/*
var trainsOperational = 8;
var totalTrains = 12;
var dayOfTheWeek = "Friday";

if (trainOperational > 0) {
	if (trainsOperatinal == totalTrains) {
		console.log("All trains are running");
	} else {
		for(var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
	
		if (trainNumer <= operationalTrains && trainNumber != 3) {
			console.log("Train #" + trainNumber + " is running.");
		} else if (trainNumber == 10 || trainNumber == 12) {
			console.log("Train # " + trainNumber + "begins running at noon";
		} else if (trainNumber == 3 && dayOfTheWeek == "Sunday") {
			console.log("Train #3 is running")
		} else {
			console.log("Train #" + trainNumber + " is not operational.");
		}
	}
}else {
	console.log("No trains today fool!");
}
*/