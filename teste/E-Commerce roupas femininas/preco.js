const valores =[
    {"id":"1", "imagem":"imagens/img_2.png", "nome": "CAMISETA MESCLA", "cor": "cinza", "Tamanho": "", "preco": 28.00, "parcela": "até 3x de R$9,33"},
    {"id":"2","imagem":"imagens/img_3.png", "nome": "SAIA EM COURO", "cor": "preto", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"3","imagem":"imagens/img_4.png", "nome": "CARDIGAN TIGRE", "cor": "laranja", "tamanho": "", "preco": 398, "parcela": "até 5x de R$79,60"},
    {"id":"4","imagem":"imagens/img_5.png", "nome": "CARDIGAN OFF WHITE", "cor": "branco", "tamanho": "", "preco": 99.90, "parcela": "até 3x de R$33,30"},
    {"id":"5","imagem":"imagens/img_6.png", "nome": "BODY LEOPARDO", "cor": "laranja", "tamanho": "", "preco": 129.90, "parcela": "até 3x de R$43,30"},
    {"id":"6","imagem":"imagens/img_7.png", "nome": "CASACO PELOS", "cor": "rosa", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"7","imagem":"imagens/img_8.png", "nome": "CROPPED STRIPES", "cor": ["azul", "amarelo", "laranja"], "tamanho": "", "preco": 120.00, "parcela": "até 3x de R$40,00"},
    {"id":"8","imagem":"imagens/img_9.png", "nome": "CAMISA TRANSPARENTE", "cor": "preto", "tamanho": "", "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"9","imagem":"imagens/img_10.png", "nome": "POCHETE CLUTCH", "cor": "preto", "tamanho": "u", "preco": 99.00, "parcela": "até 3x de R$33,00"}
];

function filtroAte50() {
    const produtosAte50 = roupas.filter(roupa => {
        return roupa.preco < 51
    })

    var html = "";
        produtosAte50.forEach(function (produtosAte50){
            html += `<div>
                <img src="${produtosAte50.imagem}"></img><br>
                <a>${produtosAte50.nome}</a><br>
                <a><strong>R$ ${produtosAte50.preco.toFixed(2)}</strong></a><br>
                <a>${produtosAte50.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosAte50.id}, ${produtosAte50.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro51Ate150() {
    const produtos51Ate150 = roupas.filter(roupa => {
        return roupa.preco < 151 && roupa.preco > 50
    })
    var html = "";
        produtos51Ate150.forEach(function (produtos51Ate150){
            html += `<div>
                <img src="${produtos51Ate150.imagem}"></img><br>
                <a>${produtos51Ate150.nome}</a><br>
                <a><strong>R$ ${produtos51Ate150.preco.toFixed(2)}</strong></a><br>
                <a>${produtos51Ate150.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos51Ate150.id}, ${produtos51Ate150.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro151Ate300() {
    const produtos151Ate300 = roupas.filter(roupa => {
        return roupa.preco < 301 && roupa.preco > 150
    })
    var html = "";
        produtos151Ate300.forEach(function (produtos151Ate300){
            html += `<div>
                <img src="${produtos151Ate300.imagem}"></img><br>
                <a>${produtos151Ate300.nome}</a><br>
                <a><strong>R$ ${produtos151Ate300.preco.toFixed(2)}</strong></a><br>
                <a>${produtos151Ate300.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos151Ate300.id}, ${produtos151Ate300.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro301Ate500() {
    const produtos301Ate500 = roupas.filter(roupa => {
        return roupa.preco < 501 && roupa.preco > 300
    })
    var html = "";
        produtos301Ate500.forEach(function (produtos301Ate500){
            html += `<div>
                <img src="${produtos301Ate500.imagem}"></img><br>
                <a>${produtos301Ate500.nome}</a><br>
                <a><strong>R$ ${produtos301Ate500.preco.toFixed(2)}</strong></a><br>
                <a>${produtos301Ate500.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos301Ate500.id}, ${produtos301Ate500.preco.toFixed(2)})"> Comprar </button>
                </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroMais500() {
    const produtosMais500 = roupas.filter(roupa => {
        return roupa.preco > 500
    })
    var html = "";
        produtosMais500.forEach(function (produtosMais500){
            html += `<div>
                <img src="${produtosMais500.imagem}"></img><br>
                <a>${produtosMais500.nome}</a><br>
                <a><strong>R$ ${produtosMais500.preco.toFixed(2)}</strong></a><br>
                <a>${produtosMais500.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosMais500.id}, ${produtosMais500.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};