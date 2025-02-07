var X = 10;
const Y = 20;

// Function  for Summation
function sumOfTwoNumbers(p1, p2) {
    console.log(`The method is called with ${p1} and ${p2}`);
    const sum = p1 + p2;
    return sum;
}

function sumOfThreeNumbers(p1, p2, p3) {
    console.log(`The method is called with ${p1}, ${p2} and ${p3}`);
    const sum = p1 + p2 + p3;
    return sum;
}


function productOfTwoNumbers(p1, p2) {
    console.log(`The method is called with ${p1} and ${p2}`);
    return p1 * p2;
};

const sumOfXandYIs = SUM(X, Y);

console.log("The sum of two numbers: ", sumOfXandYIs);

console.log("The sum of two numbers: ", SUM(1000, 40));

console.log("The sum of three numbers: ", SUM(500, 40, 50));


console.log("The Product of 30 & 40 is ", productOfTwoNumbers(30, 40));