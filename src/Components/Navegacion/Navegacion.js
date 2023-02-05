import { NavLink } from "react-router-dom"

function Navegacion(props){
function sec_men(){
   document.getElementById('seccion_derecha').style.width = '200px'
   document.getElementById('seccion_derecha').style.visibility = 'visible'
}

   return(

<nav className="nav_menu">
   <div className="logo"><h1>NOVA</h1><p>Conectate al inifinito</p><button onClick={sec_men} className="mos_men">Mostrar</button></div>
     
     <ul>
        {props.links.map( link =>
        <li key={link.id} ><NavLink to={link.to} className={link.class}>{link.text}</NavLink></li>
        )}

     </ul>
</nav>

)}

export default Navegacion