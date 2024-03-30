#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    { message: "Select one of the opreator to perform action", type: "list", name: "opreator", choices: ["addition", "subtraction", "multiplication", "division"] },
]);
if (asnwer.opreator === "addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.opreator === "subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.opreator === "multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.opreator === "division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("please select valid opreaion");
}
