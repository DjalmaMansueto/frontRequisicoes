import React, { useState } from "react";
import IndexMenu from "../Componentes/Menu";
import Cabecalho from "../Componentes/Cabeçalho";




function Cadastro(){
    //Declaração de Constane
  const [nomeCliente, SetnomeCliente] = useState('');
//Funcção que capta a alteração de elemento.
function ChangeNomeCliente(Modificacao: React.ChangeEvent<HTMLInputElement>){
    SetnomeCliente(Modificacao.target.value);
}
 
    return(
        <>
        <div>
            
            <Cabecalho/>
      
      <h1>Pagina de Cadastro</h1>
      <hr />
      <label>Nome do Cliente</label>
      <br />
      <input type="text" onChange={ChangeNomeCliente}/>
      <br />
      O valor Digitado é: {nomeCliente}


    
         </div>
         </>
    )
}
export default Cadastro