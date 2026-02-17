//promise.all,promise.settled,promise.race

/*in promise.all if we have 3 api call it run simultaneously call api and retrun the output if fullfiled but one fail it fails;
in prommise.allsettled if all api call is setttled (mean it need to run output is error not is not a problem),
in promise.race the first settled problrm will come as a output in case of error also,
in promise.any the first fulfilled problem wiil come as a output,(fulfiled means succes output) if all is rejecte it give aggrate array error of all error;
*/

//demo

const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("p1 Sucess");
    },3000);
});

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("p2 Fali");
    },1000);
});
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("p3 Sucess");
    },2000);
});

// Promise.all([p1,p2,p3]).then(res =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

/*Promise.allSettled([p1,p2,p3])
.then(res =>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
*/

/*Promise.race([p1,p2,p3])
.then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})*/

Promise.any([p1,p2,p3])
.then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

