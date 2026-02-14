/*console.log("Start");

setTimeout(function (){
    console.log("Middle");
},0);

console.log("end");*/

const cart = ["oneplus 11r","ram 8 gb","laptop ssd 2.5"];

api.createorder(cart,function(){
    api.propay()
})