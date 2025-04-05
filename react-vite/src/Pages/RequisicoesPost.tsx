import Cabecalho from "../Componentes/Cabeçalho";
import { Usuario } from "../Types/Usuario";
import { ChangeEvent, useState } from "react";

function RequisicaoesPost(){
    

    //FUNÇÃO QUE ESTA ADD A INFORMAÇÃO
    const handleAddClick = async () => {
        if(addTitleText && addTextArea){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'Post',
                body: JSON.stringify
                ({
                    title: addTitleText,
                    body: addTextArea,
                    userID: 1
                }),
 
                headers: {
                    'Content-Type':'Application/json'
                }
            });
            let json = await response.json();
 
            console.log(json);
 
            if(json.id){
                alert('Post Adicionado com sucesso')
                setUsuario( (usuario) => [...usuario, json]);
            }
            else {
                alert('Ocorreu alguns Falhas')
            }
        }
        else{
            alert('Prencha as informações');
        }
    }
 
    //FUNÇÕES PARA ALTERAR OS CAMPOS CRIADOS NA TELA ADICIONAR POST
    const [addTitleText, setaddTitleText] = useState('');
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) =>(
        setaddTitleText(e.target.value)
    )
 
    const [addTextArea, setaddTextArea] = useState('');
    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => (
        setaddTextArea(e.target.value)
    )
 
    const [usuario, setUsuario] = useState<Usuario[]>([]);
 
    //FUNÇÃO PARA USAR O LOADING
    const [loading, setLoading] = useState(false);
 
        // useEffect(() => {
        //     carregarUsuario();
        // },[])
 
        const carregarUsuario = async () => {
            setLoading(true);
            try{
                let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                let json = await response.json();
                const dataArray = Array.isArray(json) ? json: [json];
                setLoading(false);
 
                setUsuario(dataArray);
            }
            catch(erro){
                setLoading(false);
                alert('Falha ao carrgar usuários');
                console.error(erro);
            }
           
        }
 
    return(
        <>
        <Cabecalho/>
            <h1>Listagem de Usuários</h1>
            <br />
            {/* <button onClick={carregarUsuario}>Carregar Usuários</button>
            <br />
            <br />
            <h2>Total de Usuários: {usuario.length}</h2>
            {loading &&
             <div className="div-carregamento">
                <img className="carregando" src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"/>
             </div>}
 
            {!loading && */}
                <div>
                    
            </div>
            
 
            <hr />
            <h1>Adicionar novo Post</h1>
            <br />
            <input
                type="text"
                placeholder="Digite o Titulo"
                onChange={handleAddTitleChange}/>
            <br />
            <br/>
            <textarea
                placeholder="Digite a descrição do texto"
                onChange={handleTextAreaChange}/>
            <br />
            <button onClick={handleAddClick}>Adicionar</button>
   
        </>
    )
}
 
export default RequisicaoesPost