function a(){
    b=10;
    console.log(d);
    c();
    function c(){
        console.log(b);
        console.log(d);
    }
}
var d=100
a();
