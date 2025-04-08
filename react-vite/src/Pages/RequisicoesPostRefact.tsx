import { ChangeEvent, useState } from "react"
import Cabecalho from "../Componentes/Cabeçalho";
import { Usuario } from "../Types/Usuario";
import FormPost from "../formpost/index";
import UsuarioItem from "../Componentes/usuarioitem";
import { api } from "../api";
 
function RequisicoesPostRefact() {
 
    // useEffect(() => {carregarProdutos()})
 
 
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const[loading, setLoading] = useState(false);
    const [ParamBusca, setparamBusca] = useState()
 
    const carregarUsuarios = async () => {
        setLoading(true)
           
        let json = await api.CarregarTodosUsuarios();

            const dataArray = Array.isArray(json) ? json : [json];
            setLoading(false);
            setUsuarios(dataArray);
        
         
    }
 
    const[addTitleText, setAddTitleText] = useState('');
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }
 
    const[addBodyText, setAddBodyText] = useState('');
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }
 
    const handleAddClick = async (sTitle: string, sBody:string) => {
 
        if (addTitleText && addBodyText) {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: sTitle,
                    body: sBody,
                    userId: 1}),                
               
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
 
            console.log(json);
 
            if(json.id){
                alert('Post adicionado com sucesso')
                setUsuarios((usuarios) => [...usuarios, json]);
            } else {
                alert('Ocorreu alguma falha')
            }
        } else {
            alert('Preencha as informações.')
        }
 
    }
 
 
    return (
        <div>
            <Cabecalho />
            <br />
            <FormPost onAdd={handleAddClick} />
            <div>
            <button onClick={carregarUsuarios}>Carregar Usuários</button>
            <br />
            <br />
            <h2>Total de Usuários: {usuarios.length}</h2>
            <hr />
            <br />
            </div>
            <h2>Lista de Usuários:</h2>
            {usuarios.map((item) => (
                <UsuarioItem data={item} />
        ))}
        </div>
    )
}