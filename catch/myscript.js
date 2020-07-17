console.log("%cLets Understand Catch","color:green")

function calTax(){
    return new Promise(function(resolve, reject) {
        if (false) {
          resolve("Tax Calculated!");
        }
        else {
          reject(Error("Tax Calculation failed!"));
        }
      }); 
}
function calDiscount(){
    return new Promise(function(resolve, reject) {
        if (true) {
          resolve("Discount Calculated!");
        }
        else {
          reject(Error("Discount Calculation failed!"));
        }
      }); 
}
function calTotal(){
    return new Promise(function(resolve, reject) {
        if (true) {
          resolve("Total Calculated!");
        }
        else {
          reject(Error("Total Calculation failed!"));
        }
      }); 
}
calTax()
    .catch(response=>{console.log('1st'+response)})
    .then(response=>{console.log(response);
        return calDiscount()})
    .then(response=>{console.log(response);
        return calTotal()})
    .catch(response=>{console.log('common '+response)});