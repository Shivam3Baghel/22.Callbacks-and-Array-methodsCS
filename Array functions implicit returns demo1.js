let rollDie=()=>{
    return Math.floor(Math.random()*6)+1;
};
console.log(rollDie());
let greet=s=>{
    console.log(`Hey ${s}!`);
};
greet("Shivam baghel");
let greet0=s=>{
    return (`Hey ${s}!`);
}
console.log(greet0("Shivam baghel"));
/*4
Hey Shivam baghel!
Hey Shivam baghel!*/