const radius =[3,1,2,4];

const area =function (radius){
    return Math.PI*radius*radius;
};

const cir =function(radius){
    return Math.PI*radius*2;
}

const cal =function (radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(cal(radius,area));
console.log(cal(radius,cir));