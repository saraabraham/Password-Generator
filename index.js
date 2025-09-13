const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1El=document.getElementById("p1-el")
let p2El=document.getElementById("p2-el")

function generate(){
   
    let pass1=""
    let pass2=""
    for(let i=0;i<15;i++){
        let i1=Math.floor(Math.random()*characters.length)
        let i2=Math.floor(Math.random()*characters.length)
        pass1 += characters[i1]
        pass2 += characters[i2]
    }
    p1El.textContent=pass1
    p2El.textContent=pass2
    
}


