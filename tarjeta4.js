const cardFornt = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const letrasFront = cardFornt.innerText.split('');
const letrasBack = cardBack.innerText.split('');
const color = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
];
function crearSpan(elementos, letras) {
    elementos.innerHTML = letras
        .map((letra) => `<span
            style = "color: ${color[Math.floor(Math.random() * color.length)]}"
        >${letra}</span>`)
        .join('');
    ;
}
crearSpan(cardFornt, letrasFront);
crearSpan(cardBack, letrasBack);
setInterval(() => {
    crearSpan(cardFornt, letrasFront);
    crearSpan(cardBack, letrasBack);
}, 1000);