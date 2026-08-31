//let age = 18;
//let hasID = true;
//let allowed = age >= 20 && hasID;
//console.log(allowed);
let price = 150;
let quantity = 3;
let taxRate = 0.12;
let discount = 50;
let Subtotal = price * quantity;
let taxamount = Subtotal * taxRate
let finalamountdue = (Subtotal + taxamount ) - discount;
console.log("---Store Checkout Summary---");
console.log("Subtotal: " + Subtotal);
console.log("Tax Amount: " + taxamount);
console.log("Final Amount " + finalamountdue);
