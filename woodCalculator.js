
function woodCalculator(chair,table,bed){
    var total = (chair*1) + (table*3) + (bed*5) ;
    return total;
}

var result = woodCalculator(60,15,10);
console.log("Total Wood Need: " +result  + " cubicFeet" );