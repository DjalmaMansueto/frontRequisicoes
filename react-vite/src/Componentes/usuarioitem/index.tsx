import { Usuario } from "../../Types/Usuario";

type Props={
    data: Usuario;

}
function UsuarioItem ({data}: Props ){
    return(
        <div>
        <hr />
        USER ID:{data.userId}
        <br />
        TÍTULO:{data.title}
        <br />
        <hr />

        </div>
    )
}

export default UsuarioItem