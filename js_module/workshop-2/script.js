let movieName = prompt("Enter Your Favourite Movie Name:");
let rating = [];

while(true){
    let ratingInput = prompt("Enter the Rating for the" + movieName);
   
    if(ratingInput === "done") {
        break;
    }
    
    var ratingValue = parseInt(ratingInput);
    if(ratingValue >= 1 && ratingValue <= 10){
        rating.push(ratingValue);
    }else {
        alert("Please Enter the Rating between 1 to 10");
    }
}

console.log('====================================');
console.log(rating);
console.log('====================================');
let totalRating = 0;
[5,4,6]
for(let i=0; i<rating.length; i++){
    totalRating += rating[i];
}

let averageRating = totalRating / rating.length

alert("The Average Rating for the " + movieName + " is " + averageRating + "and the total rating is " + totalRating);
