console.log("%c --------------Begin Javascript for ABAPer'- Session 1--------------------", ' color: red')
// const bukrs = "1000"



var ekpo = {ebeln:1, ebelp:'00010',matnr:'Mat1',netpr:10,menge:20,partners:{
    name:"Nabheet"
}}
 var ekpo1 = {ebeln:1, ebelp:'00020',matnr:'Mat2',netpr:20,menge:30}
 var ekpoline = [ekpo,ekpo1]
// var value = "ekgrp"
// var ekko = {ebeln:1,
//     ekgrp:"1000",
//     bukrs:1000,
//     ekpo:ekpoline,
//     combinecompplant: function(){
//         return this.bukrs + this.ekgrp;
//     }
// }
// var ekpo2 = {...ekpo};
// var ekpo2 = JSON.parse(JSON.stringify(ekpo));
// ekpo.ebeln = 3
// ekpo.partners.name = "Mahesh"
// console.log(ekpo)
// console.log(ekpo2)
// console.log(Object.keys(ekpo))
// console.log(Object.values(ekpo))
// console.log(Object.entries(ekpo))

function PO(ebeln,amount,quantity){
    this.ebeln = ebeln;
    this.qty = quantity;
    this.amount  = amount;
    this.total = function(){
        return this.qty*this.amount;
    }
}
var my = new PO(1,2,3)
console.log(my.total())

var a = 3
var b = a+2










































































console.log("%c --------------End Javascript for ABAPer'- Session 1--------------------", ' color: red')