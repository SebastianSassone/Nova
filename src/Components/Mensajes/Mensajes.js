import Mensaje from "./Mensaje";
import Chat from "./Chat";

function Mensajes(){

    return(
        
        <section className="sec_mensajes">

          <div className="content">
           <div className="conten_mensajes">
           <Mensaje username="Martina Lopez"></Mensaje>
           <Mensaje username="Gaston Cruz"></Mensaje>
           <Mensaje username="Rich Eacth"></Mensaje>
           </div>

           <div className="sec_chats">
           <Chat></Chat>
           </div>
           </div>

        </section>
        
    )

}

export default Mensajes