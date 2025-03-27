import Cabecalho from '../Componentes/Cabeçalho';
import Menu from '../Componentes/Menu';
import '../estilo.css/estilo.css'


function Home() {
    let number1: number= 5;
    let number2: number= 20;

   function Somar(n1:number,n2:number): number{
    return n1 + n2;

   }
   function Multiplicar(n1:number,n2:number): number{
    return n1 * n2;

   }
   function Dividir(n1:number,n2:number): number{
    return n1 / n2;

   }
   function Subtrair(n1:number,n2:number): number{
    return n1 + n2;

   }
    return (
    <>
    <div>
       <Cabecalho titulo=" Meu Cabeçalho" pagina="Menu" parametro="Tela Inicial"></Cabecalho> 
    </div>
    <h3>Calcule as Variaveis</h3>
    variavel 1 é {number1}
    <br />
    variavel 2 é {number2}
    <hr />
    soma é {Somar(number1,number2)}; 
    <hr />
    A Multiplicação é:  {Multiplicar(number1,number2)}; 
    <hr />
    A divisao é:  {Dividir(number1,number2)}; 
    <hr />
    Subtração é:  {Subtrair(number1,number2)}; 


  
    </>
  
  
       )
  }
  
  export default Home
