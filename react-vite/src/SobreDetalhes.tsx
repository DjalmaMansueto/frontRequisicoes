import { useParams, useNavigate } from "react-router-dom"
import Home from "./Pages/Home"

function SobreDetalhes(){
const QualquerCoisa = useParams();
const navegacao = useNavigate();

function HandleVoltar(){
  navegacao('/');
}


  return(
     <div>
        <Home/>
        O valor que estou recebendo via parametros da url é:
       {QualquerCoisa.Sobre}
    <br /><br />
    <button onClick={HandleVoltar}>Voltar </button>
     </div>
  )

    
}


export default SobreDetalhes