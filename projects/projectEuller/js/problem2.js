/* This code is write with long name functions/variables for a didact reason. 
 * There is another ways to solve the same problem, but this solution is a good example to understand the logic
*/

document.getElementById("quantityProblem2").addEventListener("keyup", function(event) {
    event.preventDefault();
    // Enter
    if (event.keyCode == 13)  {
        document.getElementById("buttonCalculateProblem2").click();
    }
});


document.getElementById("buttonCalculateProblem2").onclick = function() {
	var sum = 0;
	var quantityProblem2 = document.getElementById('quantityProblem2').value;	
	
	if(!!!quantityProblem2) {
		alert("Please, put a value on the input field");
		return;
	}

	if(isNaN(quantityProblem2)) {
		alert("Please, only numbers");
		return;
	}

	if(quantityProblem2 < 3) {
		document.getElementById("responseProblem2").innerHTML = 0;	
		return;
	}


	var actualValue = 2;
	var beforeValue = 1;
	var beforeBeforeValue = 1; // HAHAHAHAHA
	var tempValue;

	while(actualValue < quantityProblem2) {
		if(actualValue % 2 == 0)
			sum += actualValue;

		tempValue = actualValue;
		actualValue = actualValue + beforeValue;
		beforeValue = tempValue;
		beforeBeforeValue = actualValue - beforeValue;
	}
	
	document.getElementById("responseProblem2").innerHTML = sum;
}


