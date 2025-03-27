import { useState } from "react"
import { Produto } from "../Types/Produtos"
import "../estilo.css/estilo.css"
 
function RequisicoesType() {
 
    const [produtos, SetProdutos] = useState<Produto[]>([]);
 
    const carregarProdutos = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
 
        .then((json) => {
            SetProdutos(json);
        })
    }
 
    return(
 
        <div>
            <h1>QUANTIDADE DE PRODUTOS</h1>
            <br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            <br />
            Total de produtos: {produtos.length}
            <br />
            <h1>Lista de Produtos</h1>
            <div className="CardProdutos">
                {produtos.map((item, index) => (
                    <div key={index} >
                        <img src={item.image} className="products" />
                        <br />
                        TITULO DO ITEM: {item.title}
                        <br />
                        DESCRIÇÃO DO ITEM: {item.description}
                        <br />
                        <hr />
                    </div>

                  ))}
                </div>
            </div>
)
}

export default RequisicoesType;