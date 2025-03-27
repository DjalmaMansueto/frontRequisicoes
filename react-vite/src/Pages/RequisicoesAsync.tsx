import { useState } from "react"
import { Produto } from "../Types/Produtos"
import "../estilo.css/estilo.css"
 
function RequisicoesAsync() {
 
    const [produtos, SetProdutos] = useState<Produto[]>([]);

    const [loading, setLoading] = useState(false)
 
    const carregarProdutos = async () => {
        setLoading(true);

       try{
        let response = await fetch('https://fakestoreapi.com/products/4');
        let json = await response.json();
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);

        SetProdutos(dataArray);
       } catch (erro){
        setLoading(false)
        alert('Falha ao carregar os produtos. Tente novamente mais tarde.')
        console.error(erro);
       }
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

            {loading&&
            <div>Carregando conteúdo ... </div>
            }
            {!loading&&
            <div>
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
            </div>}
            </div>

            




            
)
}

export default RequisicoesAsync;