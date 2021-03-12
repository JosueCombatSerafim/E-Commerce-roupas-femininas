function addCarrinho(id, preco){
	localStorage.setItem("id" + id, id);
	localStorage.setItem("preco" + id, preco);
	alert("Produto adicionado ao carrinho!");
	location.reload();
}