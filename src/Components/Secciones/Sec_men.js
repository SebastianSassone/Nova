import Mensaje from "../Mensajes/Mensaje"

function SecMen(){

   function aler(){
      alert('Solo es posible acceder a la seccion mensajes desde la barra de navegacion')
   }

   return(
      <section className="section_mensajes" onClick={aler}>  
       <p className="title_m" >Mensajes</p>
       <Mensaje username="Equipo Nova"></Mensaje>
      </section>
   )
}

export default SecMen