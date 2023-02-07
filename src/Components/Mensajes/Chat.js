import { useState, useEffect } from "react"


function Chat(){

const [mensaje, setMensaje] = useState("")

let handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem('Mensaje', mensaje)
    setMensaje("")
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
            <p>
              Bienvenido a Nova, debo informarle que esta vercion de la aplicaion no cuenta con una  base de datos por lo cual 
              sus funcionlidades se encuentran limitadas.  
            </p>
            </div>
            <div className="mos_msj_env">
            <p>
              {msj}
            </p>
            </div>
            <form onSubmit={handleSubmit} className="form_msj">
            <textarea type="text" className="textarea_msj" placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <button type="submit" className="env_msj">Enviar</button>
            </form> 
       
        </div>

    )
}

export default Chat