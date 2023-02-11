import Mensaje from "./Mensaje";
import Chat from "./Chat";
import Footer from "../Footer/Footer"
import En_linea from "../Conten_secs/En_linea";

function Mensajes(){

    return(
        
        <section className="sec_mensajes">

          <div className="content">
            <div className="conten_mensajes">
            <div className="conten_chats">
            <Mensaje username="Equipo Nova"></Mensaje>
            <div className="en_li_msj">
            <En_linea></En_linea>
            </div>
             </div>
             <div className="footer_adap">
             <Footer></Footer>
             </div>
             </div>
              <div className="sec_chats">
              <Chat></Chat>
              </div>
           </div>

        </section>
        
    )

}

export default Mensajes