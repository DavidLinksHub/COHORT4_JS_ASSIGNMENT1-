const calculate = (num1, num2, operation) =>{
    //To validate that inputs are numbers and operation is a valid string
    if (num1 === null || num2 === null || num1 === undefined || num2 === undefined) {
        return "Error: Both numbers are null or undefined.";
    }
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "Error: Both inputs must be numbers.";
    }
    if(!["add", "subtract", "multiply", "divide"].includes(operation)){
        return "Error: Invalid operation. Choose from 'add', 'subtract', 'multiply', 'divide'.";
    }

    //To perform the operation based on the input string using switch

    switch(operation){
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
        return  num1 * num2;
        case 'divide':
            if (num2 === 0){
                return "Error: Division by zero is not allowed";
            }
            return num1 / num2
        default:
           return 'Error: Invalid opperation';
    }
}

//Test cases
console.log(calculate(5,3, "add"));       //Output: 8
console.log(calculate(10,3, "divide"));   //Output: 5
console.log(calculate(7,5, "subtract"));  //Output: 2
console.log(calculate(4,3, "multiply"));  //Output: 12
console.log(calculate(16,4, "divide"))    //Output: 4
console.log(calculate(4,0, "divide"));    //Output: Error: Division by zero is not allowed
console.log(calculate(4,2, "modulus"));   //Output: Error: Invalid operation. Choose from 'add', 'subtract', 'multiply', 'divide'.
console.log(calculate(null,2, "add"));    //Output: Error: Both numbers are null or undefined.
console.log(calculate(4, "a", "add"));    //Output: Error: Both inputs must be numbers.