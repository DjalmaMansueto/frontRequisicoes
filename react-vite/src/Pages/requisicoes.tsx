import { useState } from "react";
import { Link } from "react-router-dom";

function Requisicoes () {

    const [produtos , setProdutos] = useState([]);

    const carregarProdutos = () => {      
        fetch("https://fakestoreapi.com/products/")
        
            .then((response) => {
                return response.json();
        })        
            .then((json) => {
                setProdutos(json);
        })  
    }
 
    return (
    <div>
        
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />
        {/* Criando botão para aplicação da função de busca mediante ao clique. */}
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />     
        <br />     
        {/* Apenas exibe a quantidade de registros retornados. */}
        Total de produtos: {produtos.length}
        <br /><hr />        
     
    </div>
    )
}

export default Requisicoes;