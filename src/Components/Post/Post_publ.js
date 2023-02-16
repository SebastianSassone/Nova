import { useState } from 'react'
import Cuenta_publ_li from '../Cuenta/Cuenta_publ_li'

function Post(props){
    const [state, setState] = useState(false);
    const [number, setNumber] = useState(0);

    const setReaction = () => {
        state ? setNumber(number - 1) : setNumber(number + 1)
        setState(!state);
    }

    function alerta(){
        alert('Funcion no disponible')
    }

        return(
        <>
        <div className="publicacion">
            <Cuenta_publ_li username={props.username}></Cuenta_publ_li>
            <p className="contenido">{props.contenido}</p>
            <div className="imagenes"><img src={props.ruta}></img></div>
            <div className="reacciones">               
                <ul>        
                <li><button onClick={ setReaction }><div>{number}</div>👍</button></li>
                <li><button onClick={ setReaction }><div>{number}</div>💖</button></li>
                <li><button onClick={ setReaction }><div>{number}</div>😂</button></li>
                <li><button onClick={ setReaction }><div>{number}</div>🤔</button></li>
                <li><button onClick={ setReaction }><div>{number}</div>😡</button></li>
                <li><button onClick={ setReaction }><div>{number}</div>😔</button></li>
                </ul>
                <p onClick={alerta}>Comentar<div className="com_img1"/></p>
                <p onClick={alerta}>Compartir<div className="com_img2"/></p>           
                </div>
        </div>
        </>

    )
}

export default Post



       
