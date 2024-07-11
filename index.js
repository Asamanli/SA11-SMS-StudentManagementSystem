import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a value.";
        },
    },
    {
        name: "course",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Maths", "Computer", "English", "Science"]
    }
]);
const tutionFee = {
    "Maths": 2000,
    "Computer": 4000,
    "English": 25000,
    "Science": 3000
};
console.log(`\n Tution Fees: ${tutionFee[answer.course]}`);
console.log(`\n Balance: ${balance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a value";
        },
    }
]);
console.log(`\n Selected payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.course];
//convert string into number using parse function
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`\nCongratulations, ${answer.students} have successfully enrolled in ${answer.course}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select any one:",
            choices: ["Student status", "Exit"]
        }
    ]);
    if (ans.select === "Student status") {
        console.log(`\n------${answer.students} status------`);
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Enrolled Course: ${answer.course}`);
        console.log(`Paid Fees: ${paymentAmount}`);
        console.log(`Balance: ${balance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Management system");
    }
}
else {
    console.log("Invalid amount for course");
}
