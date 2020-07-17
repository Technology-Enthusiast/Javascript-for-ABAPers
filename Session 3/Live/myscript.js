console.log("%c----Javascript for ABAPer's Session 3 Begin----","color:darkgreen")
//---------------------------------------//
console.group("%c1.Closures","color:green")
// Execution context
// STEP 0 fxn can be assigned to variable,arrays




// STEP 1 fxn can be passed as an argument
// function doubleamount(myPO,function1){
//     return myPO.amount + function1(myPO)
// }
// console.log(doubleamount(myPO,getTotal))
// STEP 2 fxn can be returned also. - Higher order functions


// function helloWorld(){ //helloWorld global execution context
//     return function(){
//         return "Hello World";
//     }
// }
// let helloworld = helloWorld(); //local execution context
// console.log(helloworld());//local context
// STEP 3 Closure
// function helloWorld(name){ //helloWorld global execution context
//     let myname = name;
//     return function(){
//         return "Hello World" + myname;
//     }
// }
// let helloworld = helloWorld("Nabheet"); //local execution context -- destroyed
// console.log(helloworld());//local context

console.groupEnd()


console.group("%c2.Callback","color:green")
// STEP -0 simple example of fxn returned as function 
// more of a synchronous example
let myPO={ebeln:1,werks:"DE01",bukrs:"0001",
discountcode:"D1",taxcode:"T1",amount:200};
// console.log(myPO)
let mytotal = function (myPO){
    return myPO.amount;
}
function doubleamount(myPO,function1){
 
    return myPO.amount + function1(myPO)
}
console.log(mytotal)
console.log(doubleamount(myPO,mytotal))

// STEP - 1 Callback example of time out
function helloWorld(){
    console.log("Hello World11");
}
setTimeout(helloWorld,5000);
console.log('function called')

// // STEP - 2 Asynchronous request with call back
// json server/http client stuff.
// // callback hell.
$.ajax({
    url: "http://localhost:3000/ekko",
    type: "GET",
    success: function(result) {
       console.log("EKKO")
       console.log(result);
       $.ajax({
         url: "http://localhost:3000/ekpo?ebeln="+result[0].ebeln,
         type: "GET",
         success: function(result) {
            console.log("EKPO")
            console.log(result);
         },
         error: function(error) {
            console.log(error);
         }
       });
    },
    error: function(error) {
       console.log(error);
    }
  });
  console.log("call done")
console.groupEnd()
//---------------------------------------//
console.group("%c3.Promises","color:darkblue")
// STEP 0  different status of promises with basic creation
 let promisea = new Promise(function(resolve,reject){
//     if(false){
//         console.log("success");
//         resolve(true);
//     } else{
//         console.log("Reject");
//         reject(false);  
//     }
// });

// console.log(promisea);
// STEP1 Resolving promise
let fetchdata = fetch("http://localhost:3000/ekko")
  .then(val => {return val.json()})
 .then((data)=>{ console.log(data)});
//               console.log(data);
//               return fetch("http://localhost:3000/ekpo/?ebeln="+data[0].ebeln);
//             })
// .then(val=> {return val.json()})
// .then((data)=>{ console.log("ekpo");
//               console.log(data);
//             })
// STEP2 demonstrate use of all l 
// let promiseAll = Promise.all([fetch("http://localhost:3000/ekko")
// .then(val=> {return val.json()}),
//             fetch("http://localhost:3000/ekpo")
// .then(val=> {return val.json()})
// ])
// promiseAll.then((result)=>console.log(result))
// // console.log(promiseAll)
// console.log(fetchdata)
console.groupEnd()
//---------------------------------------//
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 3 End----","color:darkgreen")