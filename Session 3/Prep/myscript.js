console.log("%c----Javascript for ABAPer's Session 3 Begin----","color:blue")
//---------------------------------------//
console.group("%cClosures && Currying","color:red")
// Demonstrated function are first class citizens 
// and can be passed around
let myPO = {ebeln:1,amount:10}
let doubleAmount = function(myPO){
    return myPO.amount*2;
}
function addtax(myPO,func1){
    return func1(myPO)+30;
}
// console.log(addtax (myPO,doubleAmount))
// demonstrated function can return a function
function helloWorld(){
    return function(){
        console.log( "Hello World");
    }
}
// console.log(helloWorld()())
// Closure demonstation
function greet(name){
    return function(){
        return "hello " + name;
    }
}
// console.log(greet('nabheet')())
// console.dir(greet('nabheet'))

let poquantity = 100;
let pomethods = function(){
    return {
        addqty:function(qty){
            return poquantity + qty;
        },
        reduceqty:function(qty){
            return poquantity - qty;
        },
    }
}
let pomethodIns = pomethods();

// console.dir(pomethods)
// console.log(pomethodIns.addqty(200))


// Currying
function calculateTotal(amount){
    // console.log(amount)
    return function(tax,discount){
        return amount+tax-discount;
    }
}
let total = calculateTotal(10);
// console.log(total(2,1))
console.groupEnd()
console.group("%cCallbacks","color:blue")
function getDiscount(total,discountCode){
    switch (discountCode) {
        case "D1":
            return total * 0.1;
            break;
    
        default:
            return total * 0.25;
            break;
    }
}
function getTax(total,taxCode){
    switch (taxCode) {
        case "T1":
            return total * 0.3;
            break;
    
        default:
            return total * 0.5;
            break;
    }
}
function getfinalAmount(total,code,callback){
    return callback(total,code);
}
console.log(getfinalAmount(100,"T1",getTax));
console.log(getfinalAmount(100,"D1",getDiscount));
// setTimeout(helloWorld(),3000);
// $.ajax({
//     url: "http://localhost:3000/ekko",
//     type: "GET",
//     success: function(result) {
//        console.log(result);
//     },
//     error: function(error) {
//     //   console.log(error);
//     }
//   });
//   console.log("call done")
console.groupEnd()
//---------------------------------------//
console.group("%cPromise vs var vs const","color:orange")

// var promise = new Promise(function(resolve, reject) {
//     // do thing, then…
  
//     if (false) {
//       resolve("See, it worked!");
//     }
//     else {
//       reject(Error("It broke"));
//     }
//   });
fetch("http://localhost:3000/ekko")
.then(val=> {return val.json()})
.then((data)=>{ console.log("ekko");
              console.log(data);
              return fetch("http://localhost:3000/ekpo/?ebeln="+data[0].ebeln);
            })
.then(val=> {return val.json()})
.then((data)=>{ console.log("ekpo");
              console.log(data);
            })

//.then(po => {console.log(po)})
// console.log(promise);  
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 3 End----","color:blue")