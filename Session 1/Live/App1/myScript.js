
var ekpo1={
  ebeln:1,
  ebelp:10,
  wrbtr:200,
  menge:10
}
var ekpo2={
  ebeln:1,
  ebelp:20,
  wrbtr:300,
  menge:10
}
var poLines= [ekpo1,ekpo2]
var ekko={
  ebeln:1,
  werks:1000,
  bukrs:1000,
  items:poLines,
  returnbukrswerks: function(){
    return this.werks + this.bukrs;
  }
}

var ekko1=Object.create(ekko)
ekko1.anyproperty = "test"
console.log( ekko1);



