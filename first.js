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

const product = {
    name : "mobile",
    price : 10000,
    brand : "samsung",
    color : "black"
};
console.log(product);
console.log(product.name);
console.log(typeof product);

//question 2 : crate a const object name called profile and add some properties to it and print the object.(this is the example of a user profile information in a social media website)
const profile = {
    username: "@shreekrishnadevkota",
    followers: 1000,
    following: 500,
    bio: "I am a software developer",
    isFollowing: true
};
console.log(profile);
console.log(profile.username);
console.log(typeof profile);