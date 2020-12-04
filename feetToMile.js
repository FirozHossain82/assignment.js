function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

console.log("Distance can never be negative: ")

var firstResultMile = feetToMile(26400);
console.log("Total Mile : " + firstResultMile);
var secondResultMile = feetToMile(52800);
console.log("Total Mile : " +secondResultMile);
var thirdResultMile = feetToMile(12000);
console.log("Total Mile : " +thirdResultMile)