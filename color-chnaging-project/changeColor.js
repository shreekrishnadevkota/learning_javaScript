let btnBlue = document.querySelector("#btnBlue");
let btnRed = document.querySelector("#btnRed");
let btnGreen = document.querySelector("#btnGreen");
let body = document.querySelector("#body");

let on = true;


btnBlue.addEventListener("click", () => {
    if (on){

        body.style.backgroundColor = "blue";
        on =false;
    }
    else
    {
        body.style.backgroundColor = "black";
        one=true;
        return 0;
    }
});

btnred.addEventListener("click", () => {
    if (on){

        body.style.backgroundColor = "red";
        on =false;
    }
    else
    {
        body.style.backgroundColor = "black";
        one=true;
        return 0;
    }
});

btnGreen.addEventListener("click", () => {
    if (on){

        body.style.backgroundColor = "green";
        on =false;
    }
    else
    {
        body.style.backgroundColor = "black";
        one=true;
        return 0;
    }
});