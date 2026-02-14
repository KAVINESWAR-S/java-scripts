// const cart = ["oneplus 11r","ram 8 gb","laptop ssd 2.5"];

// const promise =createorder(cart);
// promise is an object is refers eventuall completetion of asynck opt
// //{"data":"undefine"} --->  {"data":"orderdetails"};



// promise.then( function (orderID){
//     protopay(orderID);
// });

const api ="https://api.github.com/users/akshaymarch7";

const user =fetch(api);

//console.log(user);

user.then(function(dat){
    //console.log(dat.json());
    return dat.json();
})
.then (function(data){
    console.log(data)
})

//3 states in promise pending,fullfilled,rejected;
