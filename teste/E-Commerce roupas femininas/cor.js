const cor =[
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

function filtroAmarelo() {
    const produtosAmarelo = cor.filter(roupa => {
        return roupa.cor.includes("amarelo")
    })

    var html = "";
        produtosAmarelo.forEach(function (produtosAmarelo){
            html += `<div>
                <img src="${produtosAmarelo.imagem}"></img><br>
                <a>${produtosAmarelo.nome}</a><br>
                <a><strong>R$ ${produtosAmarelo.preco.toFixed(2)}</strong></a><br>
                <a>${produtosAmarelo.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosAmarelo.id}, ${produtosAmarelo.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroAzul() {
    const produtosAzul = cor.filter(roupa => {
        return roupa.cor.includes("azul")
    })

    var html = "";
        produtosAzul.forEach(function (produtosAzul){
            html += `<div>
                <img src="${produtosAzul.imagem}"></img><br>
                <a>${produtosAzul.nome}</a><br>
                <a><strong>R$ ${produtosAzul.preco.toFixed(2)}</strong></a><br>
                <a>${produtosAzul.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosAzul.id}, ${produtosAzul.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroBranco() {
    const produtosBranco = cor.filter(roupa => {
        return roupa.cor.includes("branco")
    })

    var html = "";
        produtosBranco.forEach(function (produtosBranco){
            html += `<div>
                <img src="${produtosBranco.imagem}"></img><br>
                <a>${produtosBranco.nome}</a><br>
                <a><strong>R$ ${produtosBranco.preco.toFixed(2)}</strong></a><br>
                <a>${produtosBranco.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosBranco.id}, ${produtosBranco.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroCinza() {
    const produtosCinza = cor.filter(roupa => {
        return roupa.cor.includes("cinza")
    })

    var html = "";
        produtosCinza.forEach(function (produtosCinza){
            html += `<div>
                <img src="${produtosCinza.imagem}"></img><br>
                <a>${produtosCinza.nome}</a><br>
                <a><strong>R$ ${produtosCinza.preco.toFixed(2)}</strong></a><br>
                <a>${produtosCinza.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosCinza.id}, ${produtosCinza.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroLaranja() {
    const produtosLaranja = cor.filter(roupa => {
        return roupa.cor.includes("laranja")
    })

    var html = "";
        produtosLaranja.forEach(function (produtosLaranja){
            html += `<div>
                <img src="${produtosLaranja.imagem}"></img><br>
                <a>${produtosLaranja.nome}</a><br>
                <a><strong>R$ ${produtosLaranja.preco.toFixed(2)}</strong></a><br>
                <a>${produtosLaranja.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosLaranja.id}, ${produtosLaranja.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroVerde() {
    const produtosVerde = cor.filter(roupa => {
        return roupa.cor.includes("verde")
    })

    var html = "";
        produtosVerde.forEach(function (produtosVerde){
            html += `<div>
                <img src="${produtosVerde.imagem}"></img><br>
                <a>${produtosVerde.nome}</a><br>
                <a><strong>R$ ${produtosVerde.preco.toFixed(2)}</strong></a><br>
                <a>${produtosVerde.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosVerde.id}, ${produtosVerde.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroVermelho() {
    const produtosVermelho = cor.filter(roupa => {
        return roupa.cor.includes("vermelho")
    })

    var html = "";
        produtosVermelho.forEach(function (produtosVermelho){
            html += `<div>
                <img src="${produtosVermelho.imagem}"></img><br>
                <a>${produtosVermelho.nome}</a><br>
                <a><strong>R$ ${produtosVermelho.preco.toFixed(2)}</strong></a><br>
                <a>${produtosVermelho.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosVermelho.id}, ${produtosVermelho.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroPreto() {
    const produtosPreto = cor.filter(roupa => {
        return roupa.cor.includes("preto")
    })

    var html = "";
        produtosPreto.forEach(function (produtosPreto){
            html += `<div>
                <img src="${produtosPreto.imagem}"></img><br>
                <a>${produtosPreto.nome}</a><br>
                <a><strong>R$ ${produtosPreto.preco.toFixed(2)}</strong></a><br>
                <a>${produtosPreto.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosPreto.id}, ${produtosPreto.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroRosa() {
    const produtosRosa = cor.filter(roupa => {
        return roupa.cor.includes("rosa")
    })

    var html = "";
        produtosRosa.forEach(function (produtosRosa){
            html += `<div>
                <img src="${produtosRosa.imagem}"></img><br>
                <a>${produtosRosa.nome}</a><br>
                <a><strong>R$ ${produtosRosa.preco.toFixed(2)}</strong></a><br>
                <a>${produtosRosa.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosRosa.id}, ${produtosRosa.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroVinho() {
    const produtosVinho = cor.filter(roupa => {
        return roupa.cor.includes("vinho")
    })

    var html = "";
        produtosVinho.forEach(function (produtosVinho){
            html += `<div>
                <img src="${produtosVinho.imagem}"></img><br>
                <a>${produtosVinho.nome}</a><br>
                <a><strong>R$ ${produtosVinho.preco.toFixed(2)}</strong></a><br>
                <a>${produtosVinho.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosVinho.id}, ${produtosVinho.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};