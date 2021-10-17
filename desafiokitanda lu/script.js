window.onload = function(){

    let produtos = [
        {descricao:"Laranja", preco: 2.50},
        {descricao:"Maracujá", preco: 1.90},
        {descricao:"Acerola", preco: 5.60},
        {descricao:"Goiaba", preco: 3.80},
        {descricao:"Morango", preco: 4.50}
    ]   

    let produtosAdicionados = [];
    
    const listaProdutos = document.querySelector("#listaProdutos");

    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

    const cestaDoCliente = document.querySelector("#cestaDoCliente");


    
    (() => {
            produtos.forEach(produto => {
                let li = document.createElement("li");
                li.textContent = produto.descricao;  
                li.dataset.preco = produto.preco;  
                li.addEventListener('click', function() {
                    if(produtosAdicionados.indexOf(this.textContent) != -1){
                        alert(`Este item ${this.textContent} já está na sua cesta`);
                    }else{
                        produtosAdicionados.push(this.textContent);

                        let li2 = document.createElement("li");
                        li2.textContent = this.textContent;  
                        cestaDoCliente.appendChild(li2);  

                        const total = Number(mostraTotalCompra.value) + Number(this.dataset.preco);
                        mostraTotalCompra.value = total.toFixed(2);
                    } 
                });

                listaProdutos.appendChild(li);  
            });
        }
    )()

} 