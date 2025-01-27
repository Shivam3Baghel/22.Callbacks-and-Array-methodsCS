function add(x,y){
    return x+y;
};//1st approach normal function initialization
let add0=function(x,y){
    return x+y;
};//2nd approachfunction expression
let add1=(x,y)=>{
    return x+y;
};//3rd approach arrow function
let rollDie=()=>(
    Math.floor((Math.random()*6)+1)//Implicit Returns
);
console.log(rollDie());