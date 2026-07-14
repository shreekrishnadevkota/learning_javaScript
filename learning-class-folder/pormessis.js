// let promise = new Promise((resolve, reject)=>{
//     console.log("this is my first promise function");
//     resolve("successs lets go");
// });

let promise = new Promise((resolve, reject)=>{
    console.log("this is my first promise function");
    reject("some error occcured because of reject");
});

