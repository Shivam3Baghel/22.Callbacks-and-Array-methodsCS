console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)
console.log("GOODBYE!!")
console.log(Math.random())

let id = setInterval(() => {
    console.log(Math.random());
}, 5000);
let id0=setInterval(()=>{
    console.log(Math.random()+1);
},2000);
setTimeout(()=>{
    console.log("Last Log");
    clearInterval(id);
    clearInterval(id0);
},11000);