//JavaScript Document
function myFunction()
{
    var x = prompt("Enter 1 for +\nEnter 2 for - \nEnter 3 * \nEnter 4 for /");
    if(x==1)
    {
        var firstNumber = Number(prompt("Enter your first number:","e.g 1"));
        var secondNumber = Number(prompt("Enter your second number:"));
        alert("The sum of " + firstNumber + " and " + secondNumber + " is " + add(firstNumber,secondNumber));        
    }
    else if(x==2)
    {
        var firstNumber = Number(prompt("Enter your first number:"));
        var secondNumber = Number(prompt("Enter your second number:"));
        alert("The subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract(firstNumber,secondNumber));  
    }
    else if(x==3)
    {
        var firstNumber = Number(prompt("Enter your first number:"));
        var secondNumber = Number(prompt("Enter your second number:"));
        alert("The multiply of " + firstNumber + " and " + secondNumber + " is " + multiply(firstNumber,secondNumber));        
    }
    else if(x==4)
    {
        var firstNumber = Number(prompt("Enter your first number:"));
        var secondNumber = Number(prompt("Enter your second number:"));
        alert("The divide of " + firstNumber + " and " + secondNumber + " is " + divide(firstNumber,secondNumber));            
    }
    
    else
    {
        myFunction();
    }
}



    
function add(firstNo,secondNo)
{
    return firstNo + secondNo;
}

function subtract(firstNo,secondNo)
{
    return firstNo - secondNo;
}

function multiply(firstNo,secondNo)
{
    return firstNo * secondNo;
}

function divide(firstNo,secondNo)
{
    return firstNo / secondNo;
}
