const ordemProdutos = [
    {"id":"1", "imagem":"imagens/img_2.png", "nome": "CAMISETA MESCLA", "cor": "cinza", "tamanho": "", "preco": 28.00, "parcela": "até 3x de R$9,33"},
    {"id":"2","imagem":"imagens/img_3.png", "nome": "SAIA EM COURO", "cor": "preto", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"3","imagem":"imagens/img_4.png", "nome": "CARDIGAN TIGRE", "cor": "laranja", "tamanho": "", "preco": 398, "parcela": "até 5x de R$79,60"},
    {"id":"4","imagem":"imagens/img_5.png", "nome": "CARDIGAN OFF WHITE", "cor": "branco", "tamanho": "", "preco": 99.90, "parcela": "até 3x de R$33,30"},
    {"id":"5","imagem":"imagens/img_6.png", "nome": "BODY LEOPARDO", "cor": "laranja", "tamanho": "", "preco": 129.90, "parcela": "até 3x de R$43,30"},
    {"id":"6","imagem":"imagens/img_7.png", "nome": "CASACO PELOS", "cor": "rosa", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"7","imagem":"imagens/img_8.png", "nome": "CROPPED STRIPES", "cor": ["azul", "amarelo", "laranja"], "tamanho": "", "preco": 120.00, "parcela": "até 3x de R$40,00"},
    {"id":"8","imagem":"imagens/img_9.png", "nome": "CAMISA TRANSPARENTE", "cor": "preto", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"9","imagem":"imagens/img_10.png", "nome": "POCHETE CLUTCH", "cor": "preto", "tamanho": "u", "preco": 99.00, "parcela": "até 3x de R$33,00"}
];

function ordenarProdutos(sort) {
    var html = "";
    if (sort === "2") {
        ordemProdutos.sort((a, b) => {
            if (a.id < b.id) {
                return -1;
            }
    
            if (a.id > b.id) {
                return 1;
            }
    
            return 0;
        });
    }
    if (sort === "3") {
        ordemProdutos.sort((a, b) => {
            if (a.preco < b.preco) {
                return -1;
            }
    
            if (a.preco > b.preco) {
                return 1;
            }
    
            return 0;
        });
    }
    if (sort === "4") {
        ordemProdutos.sort((a, b) => {
            if (a.preco > b.preco) {
                return -1;
            }
    
            if (a.preco < b.preco) {
                return 1;
            }
    
            return 0;
        });
    }
    ordemProdutos.forEach(function (ordemProdutos){
        html += `<div>
            <img src="${ordemProdutos.imagem}"></img><br>
            <a>${ordemProdutos.nome}</a><br>
            <a><strong>R$ ${ordemProdutos.preco.toFixed(2)}</strong></a><br>
            <a>${ordemProdutos.parcela}</a><br>
            <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${ordemProdutos.id}, ${ordemProdutos.preco.toFixed(2)})"> Comprar </button>
        </div>`});
    document.getElementById("conteudo-right").innerHTML = html
}