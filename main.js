const span = document.querySelector('.mess-with-me');

span.style.fontSize = '40px';

// const p = document.getElementByClass('mess-with-me').getElementsByTagName('p');

const p = document.querySelector('p.mess-with-me');

p.style.backgroundColor = 'green';

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

borderRemover = 0;

document.querySelector('img#triceratops').onmouseover = function() {

    document.querySelector('img#triceratops').style.cursor = 'pointer';

}

document.querySelector('img#triceratops').addEventListener('click', firstly);

function firstly() {
    borderRemover++;
    if (borderRemover % 2 !== 0) {
        document.querySelector('img#triceratops').style.border = 'solid 5px';
        document.querySelector('img#triceratops').style.borderColor = 'red';
    }
    else {
        document.querySelector('img#triceratops').style.border = 'none';
        document.querySelector('img#triceratops').style.borderColor = 'white';
    }
}

const feather = document.querySelector('#feathers');

feather.addEventListener('click', trans);

transCounter = 0;

feather.style.cursor = 'pointer';

function trans() {
    transCounter++;
    if (transCounter % 2 !== 0) {
        feather.style.opacity = '0.5';
    }

    else {feather.style.opacity = '1.0';}
}

const button = document.querySelector('#toggle');

button.addEventListener('click', final);

let counter = 0;

button.onmouseover = function() {button.style.cursor = 'pointer'};

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
    big.style.cursor = 'pointer';
    big.style.width = '200px';
}

big.onmouseout = function() {
    big.style.width = '162px';
}