console.log("------- New JS Begin ------")
// var myPO = { ebeln:1,werks:"DE01", bukrs: 1000};
// var {ebeln:po,werks:plant} = myPO;
// // console.log(po,plant);
// var myTaxCode =["D1","D2","D3","D4","D5","D6"];
// var [firstTaxCode,secondTaxCode,thirdTaxCode] = myTaxCode;
// console.log(`My first taxcode is ${firstTaxCode} and second is ${secondTaxCode} 
// and third is ${thirdTaxCode}`);
// console.log("------- New JS End ------")
// var poamout = 10
// var taxamout = 20 
// console.log(`my total is ${poamout + taxamout}`)
function getObject(ebeln=1,werks="DE01",burks="1000"){
    return {ebeln,werks,burks }
}
console.log(getObject())
console.log("------- New JS End ------")