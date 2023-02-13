import Cuenta_publ_li from "../Cuenta/Cuenta_publ_li"

function Mensaje(props){
    return(
     
        <div className="mensaje">
            <Cuenta_publ_li username={props.username}></Cuenta_publ_li>
            <p>Mensaje</p>
        </div>
        
    )
}

export default Mensaje