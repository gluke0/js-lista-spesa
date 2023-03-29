// creo array lista

let list = [
    'pane',
    'hamburger',
    'pomodori',
    'cheddar',
    'cipolla',
    'maionese',
    'patate',
    'coca cola',
]

let i = 0;

while(i < list.length){

    document.querySelector('ul').innerHTML += `<li>${list[i]}</li>`;

    i++
}