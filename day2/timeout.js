function x(){
    var i=20;
    function y(){
        console.log(i);
    }
    setTimeout(y,5000);
    //y();
    console.log("hello world");
}
x();