import  Seach  from "../Seach/Seach"
import En_linea from "../Conten_secs/En_linea"
import SecMen from "./Sec_men"

function SecDer(){
    return(
        <section className="seccion_derecha" id="seccion_derecha">
        <Seach></Seach>
        <SecMen></SecMen>
        <En_linea></En_linea>
        </section>
    )
}  

export default SecDer

