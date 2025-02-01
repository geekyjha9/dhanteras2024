// Table Print
// var a = parseInt(prompt("Pls Enter the number for which you want Table: "));
// var n = 1;

// const rootContainer = document.getElementById("root");

// while (n <= 10) {
//   console.log(`${a}X${n}=`, 2 * n);

//   const tableEntry = document.createElement("h2");

//   tableEntry.textContent = `${a} x ${n} = ${a * n}`;

//   rootContainer.appendChild(tableEntry);
//   n++;
// }

// Print Even Number

// var x = parseInt(prompt("Pls Enter the number for which you want Table: "));;

// if( x%2 === 0) {
//     console.log(`${x} is an even number...`);
// } else {
//     console.log(`${x} is an odd number...`);
// }

// for(let i=1; i<=200; i++) {
//     if(i%2 === 0) {
//         console.log(i);
//     }
// }

// Number Game

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guessedCorrectly = false;

// while (!guessedCorrectly) {
//   let userInput = prompt("Enter your guessed Number between 1 to 10");

//   let guessedNumber = parseInt(userInput);

//   if (guessedNumber === randomNumber) {
//     console.log("Congrotulations! you have won the game....");
//     guessedCorrectly = true;
//   } else {
//     console.log("You have defeated the game!!!!!!!");
//   }
// }



let password = prompt("Enter Your Password: ");

const hasMinimumLength = password.length >= 8;
const hasUpperCaseLatter = /[A-Z]/.test(password);
const hasNumber = /[0-9]/.test(password);

if(!hasMinimumLength) {
    console.log("Your Password must have atlest 8 Char......");
    alert("Your Password must have atlest 8 Char......");
}
else if(!hasUpperCaseLatter) {
    console.log("Your Password must have Upper Case Later......");
    alert("Your Password must have Upper Case Later......");
}
else if(!hasNumber) {
    console.log("Your Password must have Number......");
    alert("Your Password must have Number......");
}
else {
    console.log("Congratulations!, Your Password is Correct...");
    alert("Congratulations!, Your Password is Correct...");
}



