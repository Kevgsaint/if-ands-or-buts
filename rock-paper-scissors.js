const prompt = require("prompt-sync")({sigint: true});
let Player1 = Number(prompt("Player 1"));
let Player2 = Number(prompt("Player 2"));
console.log(Player1 + Player2);
console.log(Player1 + Player2);

let r = "rock"
let p = "paper"
let s = "scissors"

 if (Player1 === r && Player2 === s || Player1 === p && Player2 === r || Player1 === s && Player2 === p) {
    console.log("Player 1 WINS!!");
} 
 if (Player1===Player2)
    console.log("TIE!!")

else { 
    console.log("Player 2 WINS");
  }
