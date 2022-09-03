/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
massEl= document.getElementById("mass-el")
volumeEl = document.getElementById("volume-el")
inputEl= document.getElementById("input")
lengthEl= document.getElementById("length-el")
convertBtn =document.getElementById("convertbtn")


const meterToFeet=3.281
const literToGallon= 0.264
const kiloTopound=2.204


convertBtn.addEventListener("click", function (){
   let baseValue=inputEl.value

   lengthEl.textContent = `${baseValue}meter = ${baseValue * meterToFeet} feet`
   volumeEl.textContent=`${baseValue}liter = ${baseValue/literToGallon} gallon`
   massEl.textContent=`${baseValue}kilogram= ${baseValue*kiloTopound} pound`

})


 