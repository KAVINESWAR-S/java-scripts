//it all ways return a promise.and if i not retrun a promise it wrap the retrun value inside a promise

const p =new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("kavineswar s");
    },10000);
});
const p1 =new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("kavineswar s => 2");
    },15000);
});

/*async function fetData() {
    return "data";
}

async function fetpromise() {
    return p;
}


const data =fetData();
console.log(data);
data.then(
    (res)=>
        console.log(res)
);

const datapromise =fetpromise();
console.log(datapromise);
datapromise.then(
    (res)=>
        console.log(res)
);*/

//asynk and await is used to handle promises

//before aynk await to handle promise

/*function getData(){
    p.then(
        (res)=>
            console.log(res)
    );
    console.log("using normal method");
}
getData();
*/

//after aynk and await

/*async function handlepromise() {
    const val = await p;
    console.log("using asynk await => promise ->p");
    console.log(val);
    const val1 =await p1;
    console.log("p2");
    console.log(val1)
}

handlepromise()*/

//the difference between asynk await and normal methoed in promise is that asynk and await function wait for the promise to retrun and move to other task on the function but 
//normal promise call will not wait for promise to return

/*behind the secene of asynk and await
    empty callstack -> after call a asynk function
    ->the function come inside callstack->start excute one bye one
    ->when it see await -> the function excution is suspend and move out of calllstack
    ->and wait until the promise is resolved->the function moves to callstack and start excuting where it leftl
*/

async function real(){
    try{
        const data = await fetch("https://invalidurl");
        const dataValue = await data.json();
        console.log(dataValue);
    }
    catch(err){
        console.log(err);
    }
}

real();

