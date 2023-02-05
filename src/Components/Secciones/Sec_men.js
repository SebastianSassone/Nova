import Mensaje from "../Mensajes/Mensaje"

function SecMen(){

   function aler(){
      alert('Solo es posible acceder a la seccion mensajes desde la barra de navegacion')
   }

   return(
      <section className="section_mensajes" onClick={aler}>  
       <p className="title_m" >Mensajes</p>
       <Mensaje username="Martina Lopez"></Mensaje>
       <Mensaje username="Gaston Cruz"></Mensaje>
       <Mensaje username="Rich Eacth"></Mensaje>
      </section>
   )
}

export default SecMen