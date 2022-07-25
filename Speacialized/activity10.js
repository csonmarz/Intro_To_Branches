var riderAge
var riderHeight

riderAge = window.prompt("25")
riderHeight = window.prompt("47")

if (riderAge<10){
   console.log(" Cant ride: Too young")
   
}else if (riderAge<80){

   if (riderHeight<48) {
    console.log("Cant ride: Too short")
   }
      
   else {
    console.log("can")
   }
} else {
    console.log(" sure")
}



