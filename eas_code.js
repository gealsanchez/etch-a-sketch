const resbut = document.createElement('button');
resbut.textContent = 'RESET';

const diva = document.createElement('div');
const divb = document.createElement('div');

divb.className = "griddiv";

container.appendChild(diva);
container.appendChild(divb);
diva.appendChild(resbut);
let col = 16;

divb.style.setProperty('grid-template-columns', 'repeat(' + col + ', 1fr)');

for (let i = 0; i < (col * col); i++) {
    const div = document.createElement('div');
    div.className = "grid";
    div.textContent = i;
    divb.appendChild(div);
}

function clear() {

    divb.innerHTML='';
    const col = prompt('Please write the number of columns?');
    divb.style.setProperty('grid-template-columns', 'repeat(' + col + ', 1fr)');

    if (col == null || col == '') {
        alert('Canceled!');
    } else if (col > 100) alert('the number can not be greater than 100');

    for (let i = 0; i < (col * col); i++) {
        const div = document.createElement('div');
        div.className = "grid";
        div.textContent = i;
        divb.appendChild(div);
    }

    const divs = document.querySelectorAll('.grid');

    divs.forEach(div => div.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = "orange";
        event.target.style.color = "orange";
    }));

}

resbut.addEventListener('click', clear);

const divs = document.querySelectorAll('.grid');

divs.forEach(div => div.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = "orange";
    event.target.style.color = "orange";
}));

