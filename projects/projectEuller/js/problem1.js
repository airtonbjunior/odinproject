/* This code is write with long name functions/variables for a didact reason. 
 * There is another ways to solve the same problem, but this solution is a good example to understand the logic
*/

document.getElementById("quantityProblem1").addEventListener("keyup", function(event) {
    event.preventDefault();
    // Enter
    if (event.keyCode == 13)  {
        document.getElementById("buttonCalculateProblem1").click();
    }
});


document.getElementById("buttonCalculateProblem1").onclick = function() {
	var sum = 0;
	var quantityProblem1 = document.getElementById('quantityProblem1').value;	
	
	if(!!!quantityProblem1) {
		alert("Please, put a value on the input field");
		return;
	}

	if(isNaN(quantityProblem1)) {
		alert("Please, only numbers");
		return;
	}

	for (var i = 0; i <= quantityProblem1; i++) {
		if(i % 3 == 0 || i % 5 == 0) 
			sum += i;
	}
	
	document.getElementById("responseProblem1").innerHTML = sum;
}


