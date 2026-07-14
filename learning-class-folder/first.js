/*console.log("hello world");

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
console.log(typeof bull);*/


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

/*let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) { //game
    userNum=prompt("you enter the wrong number guess again ")
    
}

console.log("congratualtions, you entered the right number");*/

/*The practice question shown in the video is:

### Practice Question 1

> **Prompt the user to enter their full name. Generate a username for them based on the input. Start the username with `@`, followed by their full name, and ending with the full name length.**
> * **Example:**
> * **Input:** `shradhakhapra`
> * **Generated Username:** `@shradhakhapra13`*/

/*let fullname;

fullname= prompt("enter your full name");

let output = `@${fullname}${fullname.length}`

console.log(output);*/




// Array -----------------------------------------

/*let place = ["tokha", "jhor", "samakushi"];

for (let p of place){
    console.log(p);
}*/


// find the average of the marks given in the string

/*let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);*/



/* question: For a given array with prices of 5 items $\rightarrow$ [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.*/


/* We are given an array of marks of students. Filter out the marks of students that scored 90+."

Example Array Provided: [87, 93, 64, 99, 86]*/

/*let marks = [60,98,73,92,95]

let topper = marks.filter((val) => {
    return val>90;
})

console.log(topper);*/




/*"We are given an array of marks of students. Filter out the marks of students that scored 90+."

Example Array Provided: [87, 93, 64, 99, 86] */

/*let n = prompt("enter a number : ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

// 1. Calculate the sum of all numbers using reduce
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum = ", sum);

// 2. Calculate the product (factorial) of all numbers using reduce
let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);*/

/*
"Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag."

let newBtn = document.createElement("button");
newBtn.innerText="click me ";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

*/

/*"Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList." */

// let para = document.querySelector("p");

// para.classList.add("newClass");




// create a button and code it like this if we click once it should enable dark mode and if we click twice it should change the mode to light using java script event handeling

/*let modeBtn = document.querySelector("#mode")
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode)
    
})
*/









