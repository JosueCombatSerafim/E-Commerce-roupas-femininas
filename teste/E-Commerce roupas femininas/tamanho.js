const roupas =[
    {"id":"1", "imagem":"imagens/img_2.png", "nome": "CAMISETA MESCLA", "cor": "cinza", "tamanho": ["p", "m", "g", "gg"], "preco": 28.00, "parcela": "até 3x de R$9,33"},
    {"id":"2","imagem":"imagens/img_3.png", "nome": "SAIA EM COURO", "cor": "preto", "tamanho": ["36", "38", "40", "42", "44", "46"], "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"3","imagem":"imagens/img_4.png", "nome": "CARDIGAN TIGRE", "cor": "laranja", "tamanho": ["p", "m", "g", "gg"], "preco": 398, "parcela": "até 5x de R$79,60"},
    {"id":"4","imagem":"imagens/img_5.png", "nome": "CARDIGAN OFF WHITE", "cor": "branco", "tamanho": ["p", "m", "g", "gg"], "preco": 99.90, "parcela": "até 3x de R$33,30"},
    {"id":"5","imagem":"imagens/img_6.png", "nome": "BODY LEOPARDO", "cor": "laranja", "tamanho": ["p", "m", "g", "gg"], "preco": 129.90, "parcela": "até 3x de R$43,30"},
    {"id":"6","imagem":"imagens/img_7.png", "nome": "CASACO PELOS", "cor": "rosa", "tamanho": ["p", "m", "g", "gg"], "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"7","imagem":"imagens/img_8.png", "nome": "CROPPED STRIPES", "cor": ["azul", "amarelo", "laranja"], "tamanho": ["p", "m", "g", "gg"], "preco": 120.00, "parcela": "até 3x de R$40,00"},
    {"id":"8","imagem":"imagens/img_9.png", "nome": "CAMISA TRANSPARENTE", "cor": "preto", "tamanho": ["p", "m", "g", "gg"], "preco": 398.00, "parcela": "até 5x de R$79,60"},
    {"id":"9","imagem":"imagens/img_10.png", "nome": "POCHETE CLUTCH", "cor": "preto", "tamanho": "u", "preco": 99.00, "parcela": "até 3x de R$33,00"}
];

function filtroP() {
    const produtosP = roupas.filter(roupa => {
        return roupa.tamanho.includes("p")
    })

    var html = "";
        produtosP.forEach(function (produtosP){
            html += `<div>
                <img src="${produtosP.imagem}"></img><br>
                <a>${produtosP.nome}</a><br>
                <a><strong>R$ ${produtosP.preco.toFixed(2)}</strong></a><br>
                <a>${produtosP.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosP.id}, ${produtosP.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroM() {
    const produtosM = roupas.filter(roupa => {
        return roupa.tamanho.includes("m")
    })

    var html = "";
        produtosM.forEach(function (produtosM){
            html += `<div>
                <img src="${produtosM.imagem}"></img><br>
                <a>${produtosM.nome}</a><br>
                <a><strong>R$ ${produtosM.preco.toFixed(2)}</strong></a><br>
                <a>${produtosM.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosM.id}, ${produtosM.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroG() {
    const produtosG = roupas.filter(roupa => {
        return roupa.tamanho.includes("g")
    })

    var html = "";
        produtosG.forEach(function (produtosG){
            html += `<div>
                <img src="${produtosG.imagem}"></img><br>
                <a>${produtosG.nome}</a><br>
                <a><strong>R$ ${produtosG.preco.toFixed(2)}</strong></a><br>
                <a>${produtosG.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosG.nome}, ${produtosG.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroGG() {
    const produtosGG = roupas.filter(roupa => {
        return roupa.tamanho.includes("gg")
    })

    var html = "";
        produtosGG.forEach(function (produtosGG){
            html += `<div>
                <img src="${produtosGG.imagem}"></img><br>
                <a>${produtosGG.nome}</a><br>
                <a><strong>R$ ${produtosGG.preco.toFixed(2)}</strong></a><br>
                <a>${produtosGG.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosGG.nome}, ${produtosGG.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro36() {
    const produtos36 = roupas.filter(roupa => {
        return roupa.tamanho.includes("36")
    })

    var html = "";
        produtos36.forEach(function (produtos36){
            html += `<div>
                <img src="${produtos36.imagem}"></img><br>
                <a>${produtos36.nome}</a><br>
                <a><strong>R$ ${produtos36.preco.toFixed(2)}</strong></a><br>
                <a>${produtos36.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos36.nome}, ${produtos36.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro38() {
    const produtos38 = roupas.filter(roupa => {
        return roupa.tamanho.includes("38")
    })

    var html = "";
        produtos38.forEach(function (produtos38){
            html += `<div>
                <img src="${produtos38.imagem}"></img><br>
                <a>${produtos38.nome}</a><br>
                <a><strong>R$ ${produtos38.preco.toFixed(2)}</strong></a><br>
                <a>${produtos38.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos38.nome}, ${produtos38.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro40() {
    const produtos40 = roupas.filter(roupa => {
        return roupa.tamanho.includes("40")
    })

    var html = "";
        produtos40.forEach(function (produtos40){
            html += `<div>
                <img src="${produtos40.imagem}"></img><br>
                <a>${produtos40.nome}</a><br>
                <a><strong>R$ ${produtos40.preco.toFixed(2)}</strong></a><br>
                <a>${produtos40.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos40.nome}, ${produtos40.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro42() {
    const produtos42 = roupas.filter(roupa => {
        return roupa.tamanho.includes("42")
    })

    var html = "";
        produtos42.forEach(function (produtos42){
            html += `<div>
                <img src="${produtos42.imagem}"></img><br>
                <a>${produtos42.nome}</a><br>
                <a><strong>R$ ${produtos42.preco.toFixed(2)}</strong></a><br>
                <a>${produtos42.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos42.id}, ${produtos42.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro44() {
    const produtos44 = roupas.filter(roupa => {
        return roupa.tamanho.includes("44")
    })

    var html = "";
        produtos44.forEach(function (produtos44){
            html += `<div>
                <img src="${produtos44.imagem}"></img><br>
                <a>${produtos44.nome}</a><br>
                <a><strong>R$ ${produtos44.preco.toFixed(2)}</strong></a><br>
                <a>${produtos44.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos44.id}, ${produtos44.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtro46() {
    const produtos46 = roupas.filter(roupa => {
        return roupa.tamanho.includes("46")
    })

    var html = "";
        produtos46.forEach(function (produtos46){
            html += `<div>
                <img src="${produtos46.imagem}"></img><br>
                <a>${produtos46.nome}</a><br>
                <a><strong>R$ ${produtos46.preco.toFixed(2)}</strong></a><br>
                <a>${produtos46.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtos46.nome}, ${produtos46.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};

function filtroU() {
    const produtosU = roupas.filter(roupa => {
        return roupa.tamanho.includes("u")
    })

    var html = "";
        produtosU.forEach(function (produtosU){
            html += `<div>
                <img src="${produtosU.imagem}"></img><br>
                <a>${produtosU.nome}</a><br>
                <a><strong>R$ ${produtosU.preco.toFixed(2)}</strong></a><br>
                <a>${produtosU.parcela}</a><br>
                <button type="button" id="adicionarCarrinho" onclick="addCarrinho(${produtosU.nome}, ${produtosU.preco.toFixed(2)})"> Comprar </button>
            </div>`});
        document.getElementById("conteudo-right").innerHTML = html
};