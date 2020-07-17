console.log("%c----Javascript for ABAPer's Session 3 Begin----","color:darkgreen")
//---------------------------------------//
console.group("%cClosures","color:red")
// Execution context in all.
// fxn can be assigned to variable,array,object
let myPO={ebeln:1,werks:"DE01",bukrs:"0001",
discountcode:"D1",taxcode:"T1",amount:200};

// console.log(myPO)
let getTotal = [ function getTotal(myPO){
    return myPO.amount;
},
function getTotal1(myPO){
    return myPO.amount;
}
]

console.log(getTotal)
// fxn can be passed as an argument

// fxn can be returned also. - Higher order functions


// Closure
console.groupEnd()


console.group("%cCallback","color:orange")
// STEP -0 simple example of fxn returned as function 
// more of a synchronous example



// // STEP - 1 Callback example of time out
// function helloWorld(){
//     console.log("Hello World");
// }
// setTimeout(helloWorld(),3000);


// // STEP - 2 Asynchronous request with call back
// // callback hell.
// $.ajax({
//     url: "http://localhost:3000/ekko",
//     type: "GET",
//     success: function(result) {
//        console.log(result);
//       //  $.ajax({
//       //    url: "http://localhost:3000/ekpo?ebeln="+result[0].ebeln,
//       //    type: "GET",
//       //    success: function(result) {
//       //       console.log(result);
//       //    },
//       //    error: function(error) {
//       //       console.log(error);
//       //    }
//       //  });
//     },
//     error: function(error) {
//        console.log(error);
//     }
//   });
//   console.log("call done")
console.groupEnd()
//---------------------------------------//
console.group("%cPromises","color:darkblue")
// different status of promises with basic creation

// let promisea = new Promise(function(resolve,reject){
//     if(false){
//         console.log("success");
//         resolve(true);
//     } else{
//         console.log("Reject");
//         reject(false);  
//     }
// });
// console.log(promisea);
// prmise fetch data with then and catch
// fetch("http://localhost:3000/ekko")
// .then(val=> {return val.json()})
// .then((data)=>{ console.log("ekko");
//               console.log(data);
//               return fetch("http://localhost:3000/ekpo/?ebeln="+data[0].ebeln);
//             })
// .then(val=> {return val.json()})
// .then((data)=>{ console.log("ekpo");
//               console.log(data);
//             })
// prmise use of all 
// let promiseAll = Promise.all([fetch("http://localhost:3000/ekko")
// .then(val=> {return val.json()}),
//             fetch("http://localhost:3000/ekpo")
// .then(val=> {return val.json()})
// ])
// promiseAll.then((result)=>console.log(result))
// // console.log(promiseAll)
// console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 3 End----","color:darkgreen")