const cart =["abs","acs","awf"];
const promise=createorder(cart);

promise.then(function(orderID){
    procetopay(orderID);
    return orderID;
})
.then(function(orderID){
    return pay(orderID);
})
.then(function(payinfo){
    console.log(payinfo);
})
.catch(function(err){
    console.log(err.message);
});


function createorder(cart){

    const pr=new Promise(function (resolve,reject){
        if(!Validity(cart)){
            const err =new Error("cart is not vaild");
            reject(err);
            return;
        }
        const orderID="1234";
        if(orderID){
            resolve(orderID);
        }
    });
    return pr;
}

function procetopay(orderID){
    console.log(orderID);
};

function Validity(cart){
    return cart.length > 0;
}
function pay(orderID){
    return new Promise(function(resolve,reject){
        resolve("payment Sucessfull");
    });
}