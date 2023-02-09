function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operator = document.getElementById("Operator").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operatorfp = parseFloat (operator);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("PlusOperator").checked) {
            operator = document.getElementById("PlusOperator").value;
        }
        if (document.getElementById("MinusOperator").checked) {
            operator = document.getElementById("MinusOperator").value;
        }
        if (document.getElementById("TimesOperator").checked) {
            operator = document.getElementById("TimesOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.getElementById("DivideOperator").value;
        }

        var result;
        
        /* if the operator was "Plus" then add for result */
        if (operator == "Plus") {
            if(operand1fp + operand2fp == result);{
            }
        }
 
        /* if the operator was "Minus" then subtract for result */
        if (operator == "Minus") {
            if(operand1fp - operand2fp == result);{
            }
        }

        /* if operator was "Times" then multiply for result */
        if (operator == "Times") {
            if(operand1fp * operand2fp == result);{
            }
        }

        /* if operator was "Divide" then divide for result */
        if (operator == "Divide") {
            if(operand1fp / operand2fp == result);{
            }
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operator").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("PlusOperator").checked = result;
    document.getElementById("MinusOperator").checked = result;
    document.getElementById("TimesOperator").checked = result;
    document.getElementById("DivideOperator").checked = result;
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});