console.log("%c----Javascript for ABAPer's Session 2 Begin----","color:blue")
//---------------------------------------//
console.group("%cShadow V/S Deep Copy","color:green")

// let myPO = { ebeln:1, matnr:'Mat1',wrbtr:10, werks:"DE01"};


// let myPO2 = {...myPO};
// myPO.anotherPO = myPO2
// let myPO1 = JSON.parse(JSON.stringify(myPO));
// myPO1.anotherPO.ebeln = 2;
// console.log(myPO)
// console.log(myPO1);

console.groupEnd()
console.group("%cProtype","color:green")
// let poMethods ={
//     getDiscount(){
//         switch (this.discount){
//             case "D1":
//                 return this.amount* 0.9;
//         }

//     },
//     getTax(){
       
//     }
// } 
// // console.log(poMethods)   
// function PurchaseOrder(ebeln,amount,discount,taxcode){
//     // let this = Object.create(PurchaseOrder.prototype)
    
//     this.ebeln=ebeln;
//     this.amount=amount,
//     this.discount=discount
//     this.taxcode=taxcode
//     // po.getDiscount = poMethods.getDiscount
//     // po.getTax = poMethods.getTax
//     // return this;
// }
// PurchaseOrder.prototype.getTax = function(){
//     switch (this.taxcode){
//         case "V1":
//             return this.amount* 0.8;
//     }
// }
// PurchaseOrder.prototype.getDiscount = function(){
//     switch (this.discount){
//         case "D1":
//             return this.amount* 0.9;
//     }
// }
// let po = new PurchaseOrder(1,1000,"D1","V1")
// let po1 = PurchaseOrder(2,2000,"D1","V1")
// console.log(po);
// console.log(po1)




















console.groupEnd()
//---------------------------------------//
console.group("%clet vs var vs const","color:green")
//console.log(myname)
{
let myname = "Nabheet";

function updateName(){
    let myname = "Nabheet Madan";
    console.log(myname);
}
updateName();
console.log(myname)
}



console.groupEnd()
//---------------------------------------//
console.group("%cIf time permits Closures","color:magenta")
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 2 End----","color:blue")