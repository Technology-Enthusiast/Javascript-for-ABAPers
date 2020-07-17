console.log("%c --------------Begin Javascript for ABAPer'- Session 1--------------------", ' color: red')


var bukrs=1000, werks="Plant1"
// console.log(bukrs,werks)
// console.log(typeof bukrs,typeof werks)

var myObject = {
    bukrs:bukrs,
    werks:werks,
    shipToAddress:{
        house:"Flat",
        street:"test"
    },
    name:undefined
}
var myObject1 = {
    bukrs:bukrs,
    werks:werks,
    ekgrp:undefined
}
// console.log(myObject)
// console.log(myObject.bukrs)
// console.log(myObject.werks)

var bukrsMultiple = [1000,2000,3000,4000]
// console.log(bukrsMultiple)


var groupObjects=[{...myObject},{...myObject1}
]
// console.log(groupObjects)

// var mycopiedObject = {...myObject};
var mycopiedObject = JSON.parse(JSON.stringify(myObject));
myObject.werks = 2000
myObject.shipToAddress.house = "203"


mycopiedObject.getAddress = function(){
    return this.shipToAddress.house + this.shipToAddress.street;
}
const accessorObj = {
    _name: 'Arfat',
    get name() {
      return this._name;
    },
    set name(value) {
      this._name = value;
    }
  };
//   console.log(Object.getOwnPropertyDescriptor(accessorObj));
  function PO(ponumber,amount,tax){
  this.ponumber = ponumber;
  this.amount = amount;
  this.tax = tax;
  this.total = function(){
      return this.tax + this.amount;
  }
  }
  console.log(PO)
  console.log(PO.prototype)
  const po1 = new PO(1,10,20)
  const po2 = new PO(2,30,40)
  console.log(po1)
  console.log(po2)




























































console.log("%c --------------End Javascript for ABAPer'- Session 1--------------------", ' color: red')
