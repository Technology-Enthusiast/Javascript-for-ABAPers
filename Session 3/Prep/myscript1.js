console.log("%c Closures","color:red");

let myPO = {ebeln:1,werks:"DE01",
bukrs:"0001", 
taxcode:"T1",
amount:200,
discountcode:"D1"}
let getTax = function(myPO){
    switch (myPO.taxcode) {
        case "T1":
            return 10;
            break;
    
        default:
            break;
    }
}

function getFinalAmount(amount){
    let initialAmount = amount;
    return function(taxvalue){
        return initialAmount + taxvalue; 
    }
}
let amount = getFinalAmount(100);
console.log(amount(100))
console.log("%c Callback","color:blue");

console.log("%c Promises","color:orange");