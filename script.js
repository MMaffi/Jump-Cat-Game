const gato = document.querySelector('.gato');
const obstaculo = document.querySelector('.obstaculo');

const jump = () => {

    gato.classList.add('jump');

    setTimeout(() => {

        gato.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const obstaculoposicao = obstaculo.offsetLeft;
    const gatoposicao = +window.getComputedStyle(gato).bottom.replace('px', '');

    if(obstaculoposicao <= 155 && obstaculoposicao > 0 && gatoposicao < 50) {

        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoposicao}px`;

        gato.style.animation = 'none';
        gato.style.bottom = `${gatoposicao}px`;

        // gato.src = 'images/game-over.png'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
