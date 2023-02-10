import Mensaje from "./Mensaje";
import Chat from "./Chat";
import Footer from "../Footer/Footer"

function Mensajes(){

    return(
        
        <section className="sec_mensajes">

          <div className="content">
           <div className="conten_mensajes">
            <div className="conten_chats">
           <Mensaje username="Martina Lopez"></Mensaje>
           <Mensaje username="Gaston Cruz"></Mensaje>
           <Mensaje username="Rich Eacth"></Mensaje>
            </div>

           <Footer></Footer>

           </div>

           <div className="sec_chats">
           <Chat></Chat>
           </div>
           </div>

        </section>
        
    )

}

export default Mensajes