var numStrokes

//Assumes 'par 4'
if (numStrokes<=0){
   console.log("Invalid entry.")
}  
if (numStrokes==1){
   console.log(" Hole in 1!")
}  
if (numStrokes==2){
   console.log(" Eagle! ")
}  
if (numStrokes==3){
   console.log("Birdie.")  
}  
if (numStrokes==4){
   console.log("Par.")
}
else 
   console.log("Better luck next time.")