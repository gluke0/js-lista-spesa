// creo array lista

let list = [
    'pane',
    'hamburger',
    'pomodori',
    'cheddar',
    'cipolla',
    'maionese',
    'patate',
    'coca-cola',
]

let i = 0;

while(i < list.length){

    document.querySelector('ul').innerHTML += `<li>${list[i]}</li>`;

    i++
}

function addToList (){
    let dimenticato = document.getElementById("dimenticato").value;
    if(dimenticato) {
      document.querySelector("ul").innerHTML+=`<li>${dimenticato}</li>`;
      list.push(dimenticato)
    }
    document.getElementById("dimenticato").value = '';
}
  
document.querySelector("button").addEventListener("click", 
function (){
addToList();
}) 



