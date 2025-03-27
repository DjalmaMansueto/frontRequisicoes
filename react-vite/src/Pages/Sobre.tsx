import Cabecalho from "../Componentes/Cabeçalho";

import { useState } from "react";
import IndexMenu from "../Componentes/Menu";



function Sobre () {
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
    return (
    <>
    
    <Cabecalho/>
    
    
    <p>Meu nome é: {nome}</p>
    <button onClick={HandleMudarNome}>Nome</button>
    <br />
  
    <br />
    <p>Contador de Clicks:{numero}</p>
    <p>Mais1 </p> 
    <button onClick={handleClickButton}>+</button>
    <p>Menos1</p> 
    <button onClick={handleClckMenos}>-</button>
    
    
    
    </>

  
  
       )
  }
  
  export default Sobre