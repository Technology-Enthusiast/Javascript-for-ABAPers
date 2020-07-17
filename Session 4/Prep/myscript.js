console.log("%c----Javascript for ABAPer's Session 4 Begin----","color:blue")
//---------------------------------------//
console.group("%c1 - Different ways for Functions declaration","color:red")
// // 0. basic function
function calculateTotal(amount,tax,discount){
return amount+tax+discount;    
}
console.log(calculateTotal(100,20,30));

// // 1. Second way of same function
const calculateTotal1 = (amount,tax,discount) => {
    return amount+tax+discount;    
    }
console.log(calculateTotal1(100,20,30));    

// //2. next way of same function iife
console.log((function calculateTotal2(amount,tax,discount){
    return amount+tax+discount;    
    })(200,100,100));    
console.groupEnd()
// //3. function in object or method
let myPO = {ebeln:1,total:function getTotal(){}}
console.log(myPO)
// //4 function with one arg
let funconearg = arg => console.log(arg);
funconearg("hello1")

//---------------------------------------//
console.group("%c2 - Promises","color:orange")
// // 0. Basic Promise structure
// var promise = new Promise(function(resolve, reject) {
//     // do thing, then…
  
//     if (false) {
//       resolve("See, it worked!");
//     }
//     else {
//       reject(Error("It broke"));
//     }
//   });
//   console.log(promise)
//   promise.then((val) => { console.log("Resolved")}).catch((val) => { console.log("Rejectedd")});
 

// //1. A basic fetch call
//  console.log(fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json")
// .then(response => { return response.json()})
// .then(data => { console.log(data.value);})
// .catch(error =>{ console.log(error)} )
// )

// //2 Lets use our local server to see how we can chain promise.
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

//.then(po => {console.log(po)})
// console.log(promise);  
console.groupEnd()
console.group("%c3 - Async Await","color:blue")
// // - 0 async functions
// async function calulatetotal(amount,tax,vat) {
//     return amount+tax+vat;
//   }
  
//   calulatetotal(100,10,20);.then(alert);
// async function calulatetotal(amount,tax,vat) {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res(amount+tax+vat), 1000)
//     });
//     let result = await promise; 

//     alert(result); 
//     }
//     calulatetotal(100,10,20);

// // - 2 first lets see is there a way to better write the first call where we write
//  console.log(fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json")
// .then(response => { return response.json()})
// .then(data => { console.log(data.value);})
// .catch(error =>{ console.log(error)} )
// )
// // - 3 Then we basically write an async function to combine all.
// async function getdata(){console.log("reached here-0");let details  = await fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json");
// console.log("reached here-1");
// let data = await details.json();
// console.log("reached here-2")
// console.log(data);
// console.log("reached here-3")}
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 4 End----","color:blue")