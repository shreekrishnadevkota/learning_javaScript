console.log("hello world");

name = "shree";
console.log(name);

x= null;
console.log(x);

y = undefined;
console.log(y); 

var a = 10;
var b = 20;
var c = a + b;
console.log(c);
console.log(a);

bull= true;
console.log(bull);
console.log(typeof bull);


// prastice question
// question : create a const object name product and add some properties to it and print the object. (this is the example of a product card information in an e-commerce website)

/*const product = {
    name : "mobile",
    price : 10000,
    brand : "samsung",
    color : "black"
};
console.log(product);
console.log(product.name);
console.log(typeof product);*/

//question 2 : crate a const object name called profile and add some properties to it and print the object.(this is the example of a user profile information in a social media website)
/*const profile = {
    username: "@shreekrishnadevkota",
    followers: 1000,
    following: 500,
    bio: "I am a software developer",
    isFollowing: true
};
console.log(profile);
console.log(profile.username);
console.log(typeof profile);
*/

// conditional statement question 
// Question 3. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

/*let number = prompt("Enter a number:");
if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
} else {
    console.log(number + " is not a multiple of 5.");
} */




// questuon not 4: Qs2. Write a code which can give grades to students according to their scores:

// 80-100, A

// 70-89, B

// 60-69, C

// 50-59, D

// 0-49, F

/*let num = prompt("Enter your score:");
if (num >= 80 && num <= 100) {
    console.log("Your grade is A.");
} else if (num >= 70 && num <= 79) {
    console.log("Your grade is B.");
}else if (num >= 60 && num <= 69) {
    console.log("Your grade is C.");
}else if (num >= 50 && num <= 59) {
    console.log("Your grade is D.");
}else if (num >= 0 && num <= 49) {
    console.log("Your grade is F.");
}else {
    console.log("Invalid score.");
}
*/

// question : print all the even number from (0 to 100)
/*let num;
for(let num= 0; num<=100; num++){
    if (num % 2 === 0){
        console.log("the even number are "+num);
    }
};
*/

// question : Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum !== gameNum) { //game
    
}

console.log("congratualtions, you entered the right number");