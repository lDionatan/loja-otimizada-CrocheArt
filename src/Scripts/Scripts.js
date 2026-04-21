
const botao = document.querySelector('.colecao');
const cards = document.querySelectorAll('.card-categorias');
const secaoCards = document.querySelector('.categorias');
const sobre = document.querySelector('.sobre');

let animando = false;

if (botao && cards && secaoCards) {

    botao.addEventListener('click', () => {

        if (animando) return;

        animando = true;

        secaoCards.scrollIntoView({ behavior: 'smooth' });

        cards.forEach((card, index) => {

            setTimeout(() => {
                card.classList.add('ativo');

                setTimeout(() => {
                    card.classList.remove('ativo');
                }, 800);

            }, index * 120);

        });

        setTimeout(() => {
            animando = false;
        }, cards.length * 120 + 800);

    });
}

if (sobre) {
    sobre.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}


