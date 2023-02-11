import { useState, useEffect } from "react"

function Chat(){

const [mensaje, setMensaje] = useState("")

let handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem('Mensaje', mensaje)
    setMensaje("")

    document.getElementById('mos_msj_env').style.display = 'flex'
    document.getElementById('button').disabled=true
}

const[msj, setMsj] = useState("")

const getMsj = () => {
    return sessionStorage.getItem('Mensaje')
}

useEffect(() => {
    setMsj(getMsj());
})

    return(

        <div className="chat">
            <div className="mos_msj_rec">
             <div className="triangulo_izquierda"></div>   
            <p>
              Bienvenido a Nova, un proyecto front end con react
            </p>
            </div>
            <div className="mos_msj_env" id="mos_msj_env">
              <div className="triangulo_derecha"></div>
            <p>
              {msj}
            </p>
            </div>
            <form onSubmit={handleSubmit} className="form_msj">
            <textarea type="text" className="textarea_msj" placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <button type="submit" className="env_msj" id="button">Enviar</button>
            </form> 
       
        </div>

    )
}

export default Chat