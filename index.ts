import inquirer from "inquirer";
const answers :{
    number1:number,
    number2:number,
    operator:string
}=await inquirer.prompt([
    {
      name:"number1",
      type:"number",
      message: "Enter the first Number"
    },
    {
        name:"number2",
        type:"number",
        message: "Enter the Second Number"
      },
      {
        name:"operator",
        type:"list",
        choices:["+ Addition" , "- Subtraction" , "x Multiplication", "/Division"],
        message: "Enter the Operator"
      },
    
])
const {number1,number2,operator}=answers;
if (number1 && number2 && operator) {
    let result :number=0;
    if (operator==="+ Addition"){
        result = number1+number2
    }
    else if(operator==="- Subtraction"){
        result = number1-number2;
    }
    if(operator==="x Multiplication"){
        result = number1*number2;
    }
    if(operator==="/Division"){
        result = number1/number2;
    }
    console.log("Result is " + result);
     
}
else{
    console.log("You entered the invalid Number");
    
}
