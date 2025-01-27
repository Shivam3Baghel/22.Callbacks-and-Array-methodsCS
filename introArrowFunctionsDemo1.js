let square=(x)=>{
    return x*x;
};console.log(square(2));//st arrow approach                     semicolon         return         "Curved Brackets"          "Parameter bracket used"
let square0=x=>{
    return x*x;
};console.log(square0(2));//2nd arrow approach                    semicolon         return         "Curved Brackets"          "Parameter bracket not used"
// let square1=(x)=>(
//     return x*x;
// );//3rd arrow approach  NOT WORK               semicolon         return         "Normal Brackets"          "Parameter bracket used"
// let square2=x=>(
// 		return x*x;
// );//4th arrow approach  NOT WORK               semicolon         return         "Normal Brackets"          "Parameter bracket not used"
let isquare=(x)=>{
    x*x;
};console.log(isquare(2));//5th arrow approach                    semicolon                        "Curved Brackets"          "Parameter bracket used"
let isquare0=x=>{
    x*x;
};console.log(isquare0(2));//6th arrow approach                    semicolon                        "Curved Brackets"          "Parameter bracket not used"
// let isquare1=(x)=>(
//     x*x;
// );//7th arrow approach     NOT WORK               semicolon                        "Normal Brackets"          "Parameter bracket used"
// let isquare2=x=>(
// 		x*x;
// );//8th arrow approach    NOT WORK                semicolon                        "Normal Brackets"          "Parameter bracket not used"
let nssquare=(x)=>{
    return x*x
};console.log(nssquare(2));//9th arrow approach                         no semicolon      return         "Curved Brackets"          "Parameter bracket used"
let nssquare0=x=>{
    return x*x
};console.log(nssquare0(2));//10th arrow approach                           no semicolon      return         "Curved Brackets"          "Parameter bracket not used"
// let nssquare1=(x)=>(
//     return x*x
// );//11th arrow approach   NOT WORK             no semicolon      return         "Normal Brackets"          "Parameter bracket used"
// let nssquare2=x=>(
// 		return x*x
// );//12th arrow approach  NOT WORK              no semicolon      return         "Normal Brackets"          "Parameter bracket not used"
let nsisquare=(x)=>{
    x*x
};console.log(nsisquare(2));//13th arrow approach                     no semicolon                     "Curved Brackets"          "Parameter bracket used"
let nsisquare0=x=>{
    x*x
};console.log(nsisquare0(2));//14th arrow approach                    no semicolon                     "Curved Brackets"          "Parameter bracket not used"
let nsisquare1=(x)=>(
    x*x
);console.log(nsisquare1(2));//15th arrow approach                   no semicolon                     "Normal Brackets"          "Parameter bracket used"
let nsisquare2=x=>(
		x*x
);console.log(nsisquare2(2));//16th arrow approach                   no semicolon                     "Normal Brackets"          "Parameter bracket not used"