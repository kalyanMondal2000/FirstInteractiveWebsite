const input = ()=>{
    let input = prompt("What do you want the text to be?");
    document.getElementById("element").innerHTML = input; 
}
document.getElementById("button").addEventListener("click", input);


