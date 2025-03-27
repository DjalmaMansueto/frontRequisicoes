import ItemLista from "../Componentes/ItemLista"

function Lista(){

let ListaNomes = [
    'Djalma Mansuetoo',
    'Djalma Mansueto2',
    'Djalma Mansueto3',
    'Djalma Mansueto4',
    'Djalma Mansueto5',
    'Djalma Mansueto6',
    
]
let ListaObj =[
    {nome:'Djalma', Idade:'22'},
    {nome: 'Júlia', Idade: '22'}
]

    return(
        <div>
        
        <h1>RENDERIZAÇÃO DE LISTA EM REACT</h1>
        {ListaNomes.map(
            (PosicaoAtual,indexAtual) => (
                <div key={indexAtual}>{PosicaoAtual} </div>

                ))}

       <h1>RENDERIZAÇÃO DE LISTA de OBJ EM REACT</h1>
        {ListaObj.map((ObjAtual,indexObj) => (
                <div key={indexObj}>
            <hr />
            Nome:{ObjAtual.nome} <br />
            Idade:{ObjAtual.Idade}
            <hr />

                </div>
        ))}
            <h1>Lista Itens </h1>
            {ListaObj.map((ObjAtual,indexObj) => (
                <div key={indexObj}>
                    
           
            <ItemLista/>
          
            
            

                </div>
        ))}
            
            
        </div>
    )
}

export default Lista