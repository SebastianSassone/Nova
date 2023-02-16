import { useState } from 'react'
import CuentaPubli from '../Cuenta/Cuenta_in_li'

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
            <CuentaPubli></CuentaPubli>
            <p className="contenido">{props.contenido}</p>
            <div className="imagenes1">{props.img}</div>
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



       
