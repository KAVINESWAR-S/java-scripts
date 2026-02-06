var x=1;
a();
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x =100;
    console.log(x);
}

/* how the above code works
output:{
    [Running] node "c:\LEARNING\javascript practice\day1\function-in-js.js"
10
100
1

[Done] exited with code=0 in 0.203 seconds

}
see note book how it work
*/