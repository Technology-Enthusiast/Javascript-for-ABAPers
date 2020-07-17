
console.log("------- Old JS Begin ------")
var myPO = { ebeln:1,werks:"DE01", bukrs: 1000};
var ebeln = myPO.ebeln;
var werks = myPO.werks;
var bukrs = myPO.bukrs;
// console.log(ebeln,werks,bukrs);
var myTaxCode =["D1","D2","D3","D4","D5","D6"];
var firstTaxCode = myTaxCode[0];
var secondTaxCode = myTaxCode[1];
var thirdTaxCode = myTaxCode[2];
// console.log("My 1st taxcode is "+firstTaxCode+" Second is "
// +secondTaxCode+" Third is "+thirdTaxCode);
var poamout = 10
var taxamout = 20 
function getObject(ebeln,werks,burks){
    ebeln=1
    werks="DE02"
    burks="1000"
    return {ebeln:ebeln, werks:werks, burks:burks }
}
console.log(getObject())

// console.log("my total is "+ (poamout + taxamout))
console.log("------- Old JS End ------")