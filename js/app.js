
function adicionar() {
    //recuperar valores: nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProdutoUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade');


    alert(nomeProduto);
    alert(valorProdutoUnitario);
    alert(quantidadeProduto.value);

    let preco = quantidadeProduto.value * valorProdutoUnitario
    alert(preco)
    //calcular o preço sub total

    //adicionar esse produto no carrinho
    //atualizar o valor total
}


function limpar() {
    //limpar todos os item
}