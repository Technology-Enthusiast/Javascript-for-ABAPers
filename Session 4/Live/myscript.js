console.log("%c----Javascript for ABAPer's Session 4 Begin----","color:blue")
//---------------------------------------//
console.group("%c1 - Different ways for Functions declaration","color:green")
// // // 0. basic function
// function calculatetotal(amount,tax,vat){
//     return amount+tax+vat;
// }
// console.log(calculatetotal(100,10,20))

// // // 1. Second way of same function arrow
// let calculatetotal1 = (amount,tax,vat)=>{return amount+tax+vat}  
// console.log(calculatetotal1(100,10,30))
// // //2. next way of same function IIFE
// console.log((function calculatetotal(amount,tax,vat){
//     return amount+tax+vat;
// })(100,10,40))
// // //3. function in object or method
// let myPO = {
//     calculatetotal:function(){
//         return 1;
//     }
// }
// // //4 function with one arg
// let calculatetotal1 = amount =>{return amount} 
console.groupEnd()
//---------------------------------------//
console.group("%c2 - Promises","color:green")
// // 0. Basic Promise structure
var promise = new Promise(function(resolve, reject) {
    // do thing, then…
  
    if (true) {
      resolve("See, it worked!");
    }
    else {
      reject(Error("It broke"));
    }
  }); 
//   console.log(promise)
//    promise
//    .then((val) => { console.log("Resolved")})
//    .catch((val) => { console.log("Rejectedd")});
// alert(something)

// //1. A basic fetch call
//   console.log(fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json")
//  .then(response => { return response.json()})
//  .then(data => { console.log(data.value);})
//  .catch(error =>{ console.log(error)} )
//  )

// // //2 Lets use our local server to see how we can chain promise.
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
// callback{
//     callback{
//         cakkbaclk
//         {callback
//             callbac}
//     }
// }
//.then(po => {console.log(po)})
// console.log(promise);  
console.groupEnd()
console.group("%c3 - Async Await","color:blue")
// // - 0 async functions returning promise
// async function calulatetotal(amount,tax,vat) {
//     return amount+tax+vat;
//   }
  
//    calulatetotal(100,10,20)
//      .then(alert);

//  - 1
// async function calulatetotal(amount,tax,vat) {
//     console.log("reached here 1")
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => res(amount+tax+vat), 1000)
//     });
//     console.log("reached here 2")
//      let result = await promise; 
//      console.log(result)
    
//     console.log("reached here 4")
//     }
    // calulatetotal(100,10,20);

// // - 2 first lets see is there a way to better write the first call where we write
//  console.log(fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json")
// .then(response => { return response.json()})
// .then(data => { console.log(data.value);})
// .catch(error =>{ console.log(error)} )
// )
async function fetchdata(){
console.log("I am here - 1");
let fetchdata = await fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json");
console.log(fetchdata);
console.log("I am here - 2");
let jsonval = await fetchdata.json();

console.log("I am here - 3");
console.log(jsonval.value)
}
fetchdata()
// // - 3 Then we basically write an async function to combine all.
// async function getdata(){console.log("reached here-0");let details  = await fetch("https://services.odata.org/Northwind/Northwind.svc/Orders?$format=json");
// console.log("reached here-1");
// let data = await details.json();
// console.log("reached here-2")
// console.log(data);
// console.log("reached here-3")}
// console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 4 End----","color:blue")