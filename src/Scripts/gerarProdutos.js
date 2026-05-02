const categorias = {
    "jogo-de-banheiro": "crochet bathroom set",
    "pano-de-cozinha": "crochet kitchen towel",
    "mantas": "crochet blanket",
    "tapetes": "crochet rug",
    "amigurumi": "amigurumi",
    "bolsas": "crochet bag",
    "capas": "crochet cover",
    "roupas": "crochet clothing"
};

const nomesBonitos = {
    "tapetes": "Tapete de Crochê",
    "bolsas": "Bolsa de Crochê",
    "amigurumi": "Amigurumi",
    "mantas": "Manta de Crochê",
    "roupas": "Roupa de Crochê",
    "capas": "Capa de Crochê",
    "pano-de-cozinha": "Pano de Cozinha",
    "jogo-de-banheiro": "Jogo de Banheiro"
};

const nomesVariados = {
    "pano-de-cozinha": [
        "Pano de Cozinha em Crochê",
        "Pano Decorativo de Crochê",
        "Pano de Cozinha Artesanal",
        "Pano de Prato em Crochê"
    ],
    "tapetes": [
        "Tapete de Crochê Floral",
        "Tapete Redondo em Crochê",
        "Tapete Artesanal",
        "Tapete Decorativo"
    ],
    "bolsas": [
        "Bolsa de Crochê Elegante",
        "Bolsa Artesanal",
        "Bolsa de Ombro em Crochê"
    ],
    "mantas": [
        "Manta de Crochê Aconchegante",
        "Manta Artesanal",
        "Manta Decorativa",
        "Manta em Crochê Premium"
    ],
    "amigurumi": [
        "Amigurumi Decorativo",
        "Boneco Amigurumi",
        "Amigurumi Artesanal",
        "Personagem em Crochê"
    ],
    "capas": [
        "Capa de Crochê para Almofada",
        "Capa Decorativa",
        "Capa Artesanal",
        "Capa em Crochê"
    ],
    "roupas": [
        "Blusa de Crochê",
        "Vestido de Crochê",
        "Roupa Artesanal",
        "Peça em Crochê Exclusiva"
    ],
    "jogo-de-banheiro": [
        "Jogo de Banheiro em Crochê",
        "Kit Banheiro Artesanal",
        "Conjunto de Banheiro Decorativo"
    ]
};

// Função que busca os dados
async function gerarBanco() {

    let banco = {};

    for (let categoria in categorias) {
        console.log("categoria:", categoria);

        const query = categorias[categoria];

        const res = await fetch(`/api/pexels?q=${query}`);
        const data = await res.json();

        if (!data || !data.photos) {
            console.log("Erro na API:", categoria);
            continue;
        }

        banco[categoria] = data.photos.map((foto, i) => {

            const baseNome = nomesBonitos[categoria];

            let nomeFinal;

            if (nomesVariados[categoria]) {
                nomeFinal = nomesVariados[categoria][i % nomesVariados[categoria].length];
            } else {
                nomeFinal = `${baseNome} ${i + 1}`;
            }

            return {
                nome: nomeFinal,
                imagem: foto.src.medium
            };
        });

        console.log(`${categoria} carregada`);
    }

    return banco;
}

// Função principal
async function iniciar() {
    const banco = await gerarBanco();

    console.log("BANCO FINAL:", banco);

}

// Inicia o sistema
iniciar();