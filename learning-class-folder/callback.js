function hello() {
    console.log("hello its me")
}

setTimeout(hello, 2000) // we give time in miliseconds 2s = 2000 miliseconds

// we can also write this code in aerroe function

setTimeout(()=>{
    console.log("hello its me second time")
}, 3000)




// another  example of call back function

const helloSecond = () => {
    console.log("hello its me after 5misecond")
}

setTimeout(hello, 5000)




// example of callback function where data display one by one after every 2 second each

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1,()=>{
    getData(2,()=>{ // callback inside one callback
        getData(3,()=>{ // another callback inside another callback
            getData(4)
        });
    });
});

// this above probem is called callback hell: nested call back inside one another forming a pyramide (pyramid doom)


// promessis is in js for to solve callback hell




