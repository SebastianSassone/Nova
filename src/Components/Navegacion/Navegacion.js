import { NavLink } from "react-router-dom"

function Navegacion(props){

   return(

<nav className="nav_menu">
   <div className="logo"><h1>NOVA</h1><p>Conectate al inifinito</p></div>
     
     <ul>
        {props.links.map( link =>
        <li key={link.id} ><NavLink to={link.to} className={link.class}>{link.text}</NavLink></li>
        )}

     </ul>
</nav>

)}

export default Navegacion