
import { useState } from "react";
import Cabecalho from "../Componentes/Cabeçalho";


function SobreDjalma(){
    const[numero, setnuemro]= useState(0);
    const[nome, setnome]= useState('');

function handleClickButton(){
    setnuemro(numero + 1); 
}
function HandleMudarNome(){
    setnome('Djalma')
}
function handleClckMenos(){
    setnuemro(numero - 1); 

}
    return(
    <>
    <Cabecalho/>
     <div>Essa é a Pagina SobreDjalma</div>
    
    
    <p>Meu nome não é :{nome}</p>
    <button onClick={HandleMudarNome}></button>
    <br />
    <p>Minha idade não é: </p> 
    <button onClick={handleClickButton}></button>
    <br />


    <p>Mais1 </p> 
    <button onClick={handleClickButton}></button>
    <p>Menos1</p> 
    <button onClick={handleClckMenos}></button>

    </>


  
  
       )
  }
  
  export default SobreDjalma