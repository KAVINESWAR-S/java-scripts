function x(){
    var a=27;
    function y(){
        console.log(a);
    }
    //a=100;
    return y;
}
var z=x();
console.log(z);

z();
// the function along with lexical value form a closuler;