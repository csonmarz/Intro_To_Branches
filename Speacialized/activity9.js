var userAge
var insurancePrice

userAge= window.prompt("22")

// 15 and under
if (userAge<16) {
   console.log("Too young")
   insurancePrice = 16 
}
   
   
//16-24
else if (userAge < 25){
    insurancePrice=4800
}
//25-39
else if (userAge < 40){
    insurancePrice = 2350
}  
//40 and above
else if (userAge > 40){
    insurancePrice=2100
}  
console.log(" Annual Price: $ ")
console.log(insurancePrice)