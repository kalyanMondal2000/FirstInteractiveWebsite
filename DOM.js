const input = ()=>{return prompt("What do you want the text to be?");}
document.getElementById("button").addEventListener("click", input);
document.getElementById("element").innerHTML = input(); 

