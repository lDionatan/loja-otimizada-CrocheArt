const categorias = document.querySelectorAll('.card-categorias');
const gridProdutos = document.querySelector('.grid-produtos');
const tituloProdutos = document.querySelector('.titulo-produtos');
const secaoProdutos = document.querySelector('#produtos');



const WHATSAPP = "555180401746"; // numero dono do site

let bancoProdutos = {};

// carregar produtos do JSON
async function carregarBanco() {
    const resposta = await fetch("./src/data/produtos.json");
    bancoProdutos = await resposta.json();
}

carregarBanco();

categorias.forEach(card => {

    card.addEventListener('click', (e) => {

        e.preventDefault();

        const categoria = card.dataset.categoria;

        mostrarProdutos(categoria);

        secaoProdutos.scrollIntoView({
            behavior: "smooth"
        });

    });

});

function mostrarProdutos(categoria) {

    gridProdutos.innerHTML = "";

    const produtos = bancoProdutos[categoria];

    if (!produtos) {
        tituloProdutos.textContent = "Produtos em breve";
        return;
    }

    tituloProdutos.textContent = categoria.replace(/-/g, " ");

    produtos.forEach(produto => {
     
    
    const cardProduto = document.createElement("div");
    cardProduto.classList.add("produto-card");
    
    // imagem
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;

    // titulo
    const titulo = document.createElement("h3");
    titulo.textContent = produto.nome;

    // botao link do whats
    const linkWhats = document.createElement("a");
    linkWhats.href = `https://wa.me/${WHATSAPP}?text=Olá, gostaria de saber sobre este produto ! ${produto.nome}`;
    linkWhats.target = "_blank";
    linkWhats.classList.add("botao-whats");
    linkWhats.textContent = "Pedir orçamento";

    // mostrar card pronto
    cardProduto.appendChild(img);
    cardProduto.appendChild(titulo);
    cardProduto.appendChild(linkWhats);

    // aparece no grid
    gridProdutos.appendChild(cardProduto);
        
    });

}