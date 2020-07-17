console.log("%c----Javascript for ABAPer's Session 2 Begin----","color:blue")
//---------------------------------------//
console.group("%cShadow V/S Deep Copy","color:green")

// myPO3 = Object.assign({},myPO)
// myPO3.werks="DE03"
// myPO.anotherPO = myPO3;
// myPO2 = {...myPO};
// myPO2.werks="DE02"
// myPO2.anotherPO.werks = "DE10"
// // console.log(myPO);
// // console.log(myPO2);
// // console.log(myPO3);
// console.groupEnd()
// //---------------------------------------//
// console.group("%cDigging into Prototypes","color:blue")
// let poMethods = {
//     getDiscount : function(){
//         switch(this.dcode){
//             case 'D1':
//                 return this.amount * 0.8;
                
//         }    
//     },
//     getTax : function(){
//         switch(this.tcode){
//             case 'V1':
//                 return this.amount * 0.1;
                
//         }   
// }
// }
// function PurchaseOrder(ebeln,amount,dcode,tcode){
// let ekko =Object.create(poMethods);
// ekko.ebeln = ebeln;
// ekko.amount =amount;
// ekko.dcode=dcode;
// ekko.tcode=tcode

// return ekko;
// }

// let myPO4 = PurchaseOrder(1,100,"D1","V1");
// let myPO5 = PurchaseOrder(2,200,"D1","V1");

// console.log(myPO4)


console.groupEnd()
//---------------------------------------//
console.group("%clet vs var vs const","color:orange")

let myPO = {ebeln:1,amount:10,werks:"DE01",bukrs:"1000"};

function getPO(){
    myPO.ebeln = 2;
    console.log(myPO)
}
getPO();
console.log(myPO)
console.groupEnd()
//---------------------------------------//
console.group("%cIf time permits Closures","color:magenta")
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 2 End----","color:blue")