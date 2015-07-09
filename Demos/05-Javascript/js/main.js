$(document).ready(function() {
$(".calculator").submit(calculate) //when we submit a form it is going to run a function called calculate
});

function calculate(event){     //here we define the function
	event.preventDefault();

	var inputOne = $(".input_one").val();
	var inputTwo = $(".input_two").val();
	var operator = $(".operator").val();

	var operators = ["+", "-", "*", "/"]

	var equation;
	var result;
	var valid = true;

	equation = inputOne + operator + inputTwo;
	
	if (isNaN(inputOne) || isNaN(inputTwo)) {
				valid = false;
		}	

	if (!$.inArray(operator, operators)) {
		valid = false
		}


	if (valid) {
		result = eval(equation);
	}	 else {
		result = "ERROR"
	}



	$(".output").val(result);

}