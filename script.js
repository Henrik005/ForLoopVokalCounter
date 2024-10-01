//Model
app = document.getElementById('App')
let aCounter = 0
let eCounter = 0
let iCounter = 0
let oCounter = 0
let uCounter = 0
let yCounter = 0
let æCounter = 0
let øCounter = 0
let åCounter = 0










//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/ ` <div>Total A: ${aCounter} Total E: ${eCounter} Total I: ${iCounter}
                                Total O: ${oCounter} Total U: ${uCounter} Total Y: ${yCounter} 
                                Total Æ: ${æCounter} Total Ø: ${øCounter} Total Å: ${åCounter}
                           </div> <input type="text" onchange="vokalChecker(this.value)">`
                          
}







//Controller
//vokalChecker recieves the sentence/word you write in input, trough "value", then checks each letter based on the position of i.
function vokalChecker(value){
    console.log(value.length)
    //Reset here makes it so the numbers are turned back to zero each time vokalChecker is triggered.
    reset();
for(let i= 0; i< value.length;i++){
    if(value[i].toUpperCase()== 'A'){aCounter++}
    else if(value[i].toUpperCase()== 'E'){eCounter++}
    else if(value[i].toUpperCase()== 'I'){iCounter++}
    else if(value[i].toUpperCase()== 'O'){oCounter++}
    else if(value[i].toUpperCase()== 'U'){uCounter++}
    else if(value[i].toUpperCase()== 'Y'){yCounter++}
    else if(value[i].toUpperCase()== 'Æ'){æCounter++}
    else if(value[i].toUpperCase()== 'Ø'){øCounter++}
    else if(value[i].toUpperCase()== 'Å'){åCounter++}
}
updateView();
}
// Returns all the numbers to their original value.
function reset(){
 aCounter = 0
 eCounter = 0
 iCounter = 0
 oCounter = 0
 uCounter = 0
 yCounter = 0
 æCounter = 0
 øCounter = 0
 åCounter = 0
}






 