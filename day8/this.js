"use strict"
// this in global space

console.log(this);
 //it is global object it can be dependes upon where we run the code

// this inside thr browser

function c(){
    console.log(this);
}
c();
//window.c();
// if in strict mode the .this inside a function is undefined and if it is not strict mode it is window


//this inside object
const user = {
    name: "Kavin",
    x:function () {
        console.log(this);
    },
};

user.x();

//output is { name: 'Kavin', x: [Function: x] }