import React, { useState } from "react";
import IndexMenu from "../Componentes/Menu";
import '../estilo.css/estilo.css';
import Cabecalho from "../Componentes/Cabeçalho";


function Calculadora(){
    
const [N1, setN1] = useState(0)
function inputN1(event: React.ChangeEvent<HTMLInputElement>){
    setN1(Number(event.target.value));
}
const [N2, setN2] = useState(0)
function inputN2(event: React.ChangeEvent<HTMLInputElement>){
    setN2(Number(event.target.value));
}
 const [Resultado,setResultado] = useState (0)
     
  function handleSoma(){
    setResultado (N1 + N2);
 }
  function handleSubitracao(){
    setResultado (N1 - N2);
 }

 function handleMultiplicao(){
    setResultado (N1 * N2);
 }
 
 function handleDivisao(){
    setResultado (N1 / N2);
 }


   
    
    return(
        <>
        <Cabecalho/>
        <div className="Calculadora">
        <input className="InputCalculadora" type="text" onChange={inputN1} />
        <input className="InputCalculadora" type="text" onChange={inputN2} />
        <button className="botaocalculadora" onClick={handleSoma} >SOMAR</button>
        <button className="botaocalculadora"  onClick={handleSubitracao} >SUBITRAIR</button>
        <button className="botaocalculadora"  onClick={handleMultiplicao} >MULTIPLICAR</button>
        <button className="botaocalculadora"  onClick={handleDivisao} >DIVIDIR</button>
      Resultado:{Resultado}

       
       </div>
        </>
    )

}
export default Calculadora