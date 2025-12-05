// Declara uma variável global para armazenar o valor total do carrinho.
let totalGeral = 0;
// Limpa o conteúdo da lista de produtos no HTML ao carregar a página.
document.getElementById('lista-produtos').innerHTML = ' ';
// Define o valor total inicial exibido na página como "R$ 0".
document.getElementById('valor-total').textContent = 'R$ 0';

// Função chamada quando o botão "Adicionar" é clicado.
function adicionar() {
    //recuperar valores: nome, quantidade e valor
    // Obtém o valor do produto selecionado, que inclui nome e preço (ex: "Fone de ouvido - R$100").
    let produtoSelecionado = document.getElementById('produto').value;
    // Extrai o nome do produto usando o separador '-'. O [0] pega a primeira parte.
    let nomeProduto = produtoSelecionado.split('-')[0];
    // Extrai o valor unitário do produto usando o separador 'R$'. O [1] pega a segunda parte.
    let valorProdutoUnitario = produtoSelecionado.split('R$')[1];
    // Obtém a quantidade desejada do produto do campo de entrada.
    let quantidadeProduto = document.getElementById('quantidade').value;

    //calcular o preço sub total
    // Calcula o subtotal para o produto adicionado (quantidade * valor unitário).
    let preco = quantidadeProduto * valorProdutoUnitario;

    //adicionar esse produto no carrinho
    // Obtém o elemento da lista de produtos no carrinho.
    let listaCarrinho = document.getElementById('lista-produtos');
    // Adiciona o novo produto à lista de produtos no HTML.
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$:${valorProdutoUnitario}</span>
        </section>`;

    //atualizar o valor total
    // Soma o subtotal do produto ao total geral do carrinho.
    totalGeral = totalGeral + preco;
    // Obtém o campo que exibe o valor total.
    let campoTotal = document.getElementById('valor-total');
    // Atualiza o texto do campo com o novo valor total formatado.
    campoTotal.textContent = `R$ ${totalGeral}`;
    // Reseta o campo de quantidade para 0 após adicionar o produto.
    quantidadeProduto = document.getElementById('quantidade').value = 0;
}

// Função chamada quando o botão "Limpar" é clicado.
function limpar() {
    // Reseta a variável do valor total para 0.
    totalGeral = 0;
    // Limpa a lista de produtos do carrinho no HTML.
    document.getElementById('lista-produtos').innerHTML = ' ';
    // Reseta a exibição do valor total para "R$ 0" no HTML.
    document.getElementById('valor-total').textContent = 'R$ 0';
}