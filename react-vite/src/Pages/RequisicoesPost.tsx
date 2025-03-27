import Cabecalho from "../Componentes/Cabeçalho";
import { Usuario } from "../Types/Usuario";
import { useState } from "react";

function RequisicoesPost(){
    const [usuario, setUsuario] = useState<Usuario[]>([]);

    const [loading, setLoading] = useState(false)
 
    const carregarUsuario = async () => {
        setLoading(true);

       try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await response.json();
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);

        setUsuario(dataArray);
       } catch (erro){
        setLoading(false)
        alert('Falha ao carregar os Usuario. Tente novamente mais tarde.')
        console.error(erro);
       }
    }
       const [novoid, Setnovoid] = useState('');
       
       function ChangeNovoID(Modificacao: React.ChangeEvent<HTMLInputElement>){
        Setnovoid(Modificacao.target.value)
    }
 
    return(

        <div><Cabecalho/>
         
            <h1>Pagina Exemplos de Requisições</h1>
         <button onClick={carregarUsuario}>Carregar Usuario</button>
         <h2>Adicionar Novo Post</h2>
         <input type="text" placeholder='Digite um Título'/>
         <br />
         <textarea placeholder="campo para digitar" />
         <br />
         Digite o novo ID: {novoid}
         <br />
         <br />
         <button>Adicionar</button>
         <h3>Total Usuarios:{usuario.length}</h3>
         <hr />
         <h2>Lista de Usuarios</h2>
    

            {loading&&
            <div>Carregando conteúdo ... </div>
            }
            {!loading&&
            <div>
                <div className="CardProdutos">
                <ul>
                {usuario.map((item, index) => (
                    <div key={index} >
                    <li>
                        <h2>User ID: {item.id}</h2>
                        <p>Título: {item.title}</p>
                    </li>
                    </div>
                  ))}
                </ul>
                </div>
            </div>}
            </div>

            




            
)
}
        
 
    //     <div>
    //         <h1>Pagina Exemplos de Requisições</h1>
    // <button onClick={carregarUsuario}>Carregar Usuario</button>
    //         <br />
    // <h3>total Usuario</h3>
    // <hr />
    // <h2>Lista de Usuarios</h2>
    
    //         {loading&&
    //         <div>Carregando conteúdo ... </div>
            
          
  
  


 export default RequisicoesPost;