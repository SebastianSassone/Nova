import Post_publ from "../Post/Post_publ"
import NuevoPost from "../Post/Nuevo_post" 

import paseo_naturaleza from "../img/paseo_naturaleza.jpg"
import lobo_en_nieve from "../img/lobo_en_nieve.jpg"
import paseo_por_ciudad from "../img/paseo_por_ciudad.jpg"
import paisaje_montañas from "../img/paisaje_montañas.jpg"
import puente from "../img/puente.jpg"
import catedral_la_plata from "../img/catedral_la_plata.jpeg"

function SecCen(){

    return(

        <section className="seccion_central">

            <NuevoPost></NuevoPost>
            <Post_publ ruta={paseo_naturaleza} username={"  Perla Centro"} contenido={"Hoy sali a pasear por el campo"}></Post_publ>
            <Post_publ ruta={lobo_en_nieve} username={"  Luis Paz"} contenido={"Lobo de las Nieves resiste las bajas temperaturas"}></Post_publ>
            <Post_publ ruta={paseo_por_ciudad} username={"  Martina Lopez"} contenido={"De tour por la ciudad!!"}></Post_publ>
            <Post_publ ruta={paisaje_montañas} username={"  Gaston Cruz"} contenido={"Excelente vista desde el lago"}></Post_publ>
            <Post_publ ruta={puente} username={"  Rich Eacth"} contenido={"I will build the bridges to my dreams"}></Post_publ>
            <Post_publ ruta={catedral_la_plata} username={" Brenda Torres"} contenido={"Arquitectura neogótica en la ciudad de La Plata"}></Post_publ>

        </section>
    )

}
 
export default SecCen