//Default Approach-Normal function initialization
function/*1=keyword*/ /*2=return data type no need in javascript*/ square/*3=function name*/(x/*4=parameters*/){
	/*5=operations*/
	return x*x;/*6=return statemenrt*/
};/*semicolon can be used in javascript,not necessary(do not use advice)*/
/*a normal function declaration & initialization consists of these 7*/
//0.Approach-Function expression
let square0=function(x){
return x*x;}
//1.Approach Arrow function
let square1=(x)=>{
    return x*x;
}
//2.In arrow function When there is only one parameter then normal brackets are optional(use or not use both will work,don't use whenonly 1 argument)
let square2=x=>{
    return x*x;
}
//3.Arrow Functions also allow us to do implicit return(only single expression in func body returned without return keyword)
let square3=x=>(
    x*x
);
//4.One liner implicit return
let square4=x=>x*x;
console.log(square(2),square0(2),square1(2),square2(2),square3(2),square4(2));//4 4 4 4 4 4