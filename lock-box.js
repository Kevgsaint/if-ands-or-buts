const prompt = require("prompt-sync")({sigint: true});



 let pincode = Number(prompt("Enter Pincode"))

if (pincode === 1234){
    console.log("Success")
} else {
    console.log("Failure")
}

