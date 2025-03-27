import { Link } from "react-router-dom"

type Informacoes ={
    titulo?: string;
    pagina?:string;
    parametro?:string;
}



function Cabecalho(valores:Informacoes){
    return(
        <>

    
    <div className="Container">
   
    <div className='Menu'>
     <div></div>
     
       <div className="Botao">
       
       <Link to= "/Home/Home">Home</Link> </div>

       <div className="Botao">
       <Link to= "/Sobre/Sobre">Sobre</Link>
       </div>

       <div className="Botao">
       <Link to= "/SobreDjalma">Djalma</Link>
       </div>

       <div className="Botao">
       <Link to= "/Cadastro">Cadastro</Link>    
       </div>
       <div className="Botao">
         <Link to= "/Calculadora">Calculadora</Link></div>
         <div className="Botao">
            <Link to= "/RequisicoesPost">Requisições Post</Link>
         </div>
    </div>
    </div>
    
    <div>Titulo = {valores.titulo} </div>
    <div>pagina = {valores.pagina} </div>
    <div>Parametro = {valores.parametro} </div>
    </>
        
    )
}
export default Cabecalho