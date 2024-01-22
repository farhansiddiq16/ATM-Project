

import inquirer from "inquirer";

let user = await inquirer.prompt([

    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Farhan Siddq"

    },

    {
        type: "number",
        name: "pinCode",
        message: "Enter your 4 digit pin code"

    },
    {
        type: "list",
        name: "accountType",
        message: "select your account type",
        choices: ["current", "saving"]
    },
    {
        type: "list",
        name: "transactionType",
        message: "Select your Transaction Type",
        choices: ["fast cash", "cash withdrawl"]
    },
    {
        type: "list",
        name: "amount",
        message: "Select your Amount",
        choices: [1000, 2000, 3000, 5000, 10000],
        when(user) {
            return user.transactionType === "fast cash"
        }

    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount",
        when(user) {
            return user.transactionType === "cash withdrawl"
        }
    }

])

if (user.pinCode) {
    const balance = Math.floor(Math.random() * 100000 + 1)
    console.log(balance)
    const enteredamount = user.amount;

    if (enteredamount <= balance) {
        const remaining = balance - enteredamount
        console.log(`You have withdrawn Rupees ${enteredamount} and your remaining balance is ${remaining}`)
    }

}




