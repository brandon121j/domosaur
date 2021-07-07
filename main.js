const span = document.querySelector('.mess-with-me');

span.style.fontSize = '40px';

// const p = document.getElementByClass('mess-with-me').getElementsByTagName('p');

const p = document.querySelector('p.mess-with-me');

p.style.color = 'green';

const hide = document.querySelector('#hide-me');

hide.style.display = 'none';

document.querySelector('#triceratops').style.width = '324px';

document.querySelector('.mess-with-me').addEventListener('click', colorChange);

let switcher = 0;

document.querySelector('.mess-with-me').onmouseover = function() {

    document.querySelector('.mess-with-me').style.cursor = 'pointer';

};

function colorChange() {
    switcher++;
    if (switcher % 2 !== 0) {
        document.querySelector('.mess-with-me').style.color = 'orange';
    }
    else {
        document.querySelector('.mess-with-me').style.color = 'black';
    }
}

document.querySelector('img#triceratops').addEventListener('click', firstly);

function firstly() {
    document.querySelector('img#triceratops').style.border = 'solid 5px';
    document.querySelector('img#triceratops').style.borderColor = 'red';
}

const feather = document.querySelector('#feathers');

feather.addEventListener('click', trans);

function trans() {
    feather.style.opacity = '0.5';
}

const button = document.querySelector('#toggle');

button.addEventListener('click', final);

let counter = 0;

function final() {
    counter++;
    if (counter % 2 !== 0) {
        document.querySelector('#row').style.backgroundColor = 'red';
    }
    else {
        document.querySelector('#row').style.backgroundColor = 'white';
    }
}

const big = document.querySelector('#biggify');

big.onmouseover = function() {
    big.style.width = '200px';
}

big.onmouseout = function() {
    big.style.width = '162px';
}