/*import Atividade1 from './Atividade1'

import { Form } from 'react-router-dom';
import './AtividadePagina.css'
import Bonus from './Bonus'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape' */


import Cabecalho from './Componentes/Cabeçalho';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import SobreDjalma from './Pages/SobreDjalma';
import SobreAlunos from './Pages/SobreAlunos';
import NotFound from './NotFound';
import Rodape from './Componentes/Rodapé';
import Cadastro from './Pages/Cadastro';
import Lista from './Pages/Lista';
import Calculadora from './Pages/Calculadora';
import RequisicoesType from './Pages/RequisicoesType';
import RequisicoesAsync from './Pages/RequisicoesAsync';
import RequisicoesPost from './Pages/RequisicoesPost';
function App() {

  
  return (
    <Routes>
      <Route path = '/Calculadora' element = {<Calculadora/>}/>
      <Route path='/Cadastro' element = {<Cadastro/>}/>
      <Route path='/componentes/:cabecalho' element={<Cabecalho/>}/>
      <Route path= '/sobre/:SobreAluno' element={<Sobre/>}/>
      <Route path='*' element={<NotFound/>}/>
    <Route  path='/' element={<Home/>}/>
    <Route path= '/sobre' element={<Sobre/>}/>
   <Route path='/sobre/djalma' element={<SobreDjalma/>} />
    <Route path='/sobre/alunos' element={<SobreAlunos/>}/>
    <Route path='/Rodape' element={<Rodape/>}/>
    <Route path= '/lista' element={<Lista/>}/>
    <Route path='/requisicoestype' element={<RequisicoesType/>}/>
    <Route path='/requisicoesAsync' element={<RequisicoesAsync/>}/>
    <Route path='?requisicoesPost' element={<RequisicoesPost/>}/>
    </Routes>

  
   
  

     )
}

export default App











  /*
   <> 
      <div className='app-container'>

        <div className='Filho1'>
          <div className='Neto1'></div>
          <div className='Neto2'></div>
          <div className='Neto3'></div>
        </div>

        <div className='Filho2'>
          <div className='Neto2-1'></div>
          <div className='Neto2-2'>
            <div className='Bneto2-1'>
              <div className='Bneto2-1-1'>
                <div className='Bneto2-2-1'></div>
                <div className='Bneto2-2-2'></div>
              </div>
              <div className='Bneto2-1-2'></div>
            </div>
            <div className='Bneto2-2'>
              <div className='Bneto2-2-1-1'></div>
              <div className='Bneto2-2-1-2'></div>
            </div>
          </div>
        </div>

        <div className='Filho3'>
          <div className='Neto3-1'></div>
          <div className='Neto3-2'></div>
        </div>
<br />
      
      </div>
     <Atividade1/>
    </>
*/
