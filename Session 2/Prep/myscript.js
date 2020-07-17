console.log("%c----Javascript for ABAPer's Session 2 Begin----","color:blue")
//---------------------------------------//
console.group("%cShadow V/S Deep Copy","color:red")


// var ekko ={
//     ebeln:4500001,
//     bukrs:"DE01",
//     werks:1000
// }


// var ekkoCopy = {...ekko};
// ekkoCopy.werks = "DE02";
// // console.table(ekko)
// // console.table(ekkoCopy)

// let b = Object.assign({}, ekko)
// b.werks = 2000
// // console.table(b)


// var ekko1 = {
//     ebeln:1,
//     anotherpo:ekko
// }

// var ekko2 = {...ekko1}
// ekko2.anotherpo.ebeln = 2;
// // console.log(ekko2)

// // console.log(ekko1)
// var ekko3 = JSON.parse(JSON.stringify(ekko1));
// ekko3.anotherpo.ebeln = 3;
// console.log(ekko1);
console.groupEnd()
//---------------------------------------//
console.group("%cDigging into Prototypes","color:blue")
const  poMethods = {
 getTax(){
    switch(this.discountcode){
        case 'D1':
            return this.amount * 0.8;
            
    }    
},
getDiscount(){
    switch(this.taxcode){
        case 'V1':
            return this.amount * 0.9;
            
    }    
}
}
// console.log(poMethods)
function PurchaseOrder(ebeln,amount,taxcode,discountcode){
let ekko = Object.create(PurchaseOrder.prototype);    
ekko.ebeln=ebeln;
ekko.amount=amount;
ekko.taxcode =taxcode;
ekko.discountcode=discountcode;

return ekko;
}
PurchaseOrder.prototype.getTax = function(){
    switch(this.taxcode){
        case 'V1':
            return this.amount * 0.9;
            
    } 
}   
PurchaseOrder.prototype.getDiscount = function(){
    switch(this.taxcode){
        case 'V1':
            return this.amount * 0.9;
            
    }    
}
var ekko1 = PurchaseOrder(1,200,"V1","D1")
var ekko2 = PurchaseOrder(1,300,"V1","D1")
// console.log(ekko1);
// console.log(ekko2);
function PurchaseOrder1(ebeln,amount,taxcode,discountcode){
    //let ekko = Object.create(PurchaseOrder.prototype);    
    this.ebeln=ebeln;
    this.amount=amount;
    this.taxcode =taxcode;
    this.discountcode=discountcode;
 
    }
    PurchaseOrder1.prototype.getTax = function(){
        switch(this.taxcode){
            case 'V1':
                return this.amount * 0.9;
                
        } 
    }   
    PurchaseOrder1.prototype.getDiscount = function(){
        switch(this.taxcode){
            case 'V1':
                return this.amount * 0.9;
                
        }    
    }   
    var ekko3= new PurchaseOrder1(1,2000,"V1","D1") 
  //  console.log(ekko3)
console.groupEnd()
//---------------------------------------//
console.group("%cLet vs var vs const","color:orange")
var total = 0,discount="D1"
if(discount == "D1"){
    let total = 100;
    console.log(total)
}
console.log(total)
console.groupEnd()
//---------------------------------------//
console.group("%cIf time permits Closures","color:magenta")
console.groupEnd()
//---------------------------------------//
console.log("%c----Javascript for ABAPer's Session 2 End----","color:blue")