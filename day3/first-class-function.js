// //function statement
// function a(){
//     console.log("Hello World");
// }

// a();

// //function Expression
// // Anomymous function
// var b=function (){
//     console.log("hello world 2");
// }

// b();

// //named function
// var c =function d(i=0){
//     console.log("hello word",i);
//     if(i<3){
//         d(i+1);
//     }
// }
// c();

//first class function - the ablity to pass the function as a parameter and retrun a function from function

function k(param1){
    return param1;
}

function l(){
    console.log("KAVINESWAR");
}

console.log(k(l));




