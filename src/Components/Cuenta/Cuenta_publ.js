import  Seach  from '../Seach/Seach'
import SecMen from '../Secciones/SecMen'
import Enlinea from '../Conten_secs/Enlinea'
import SecCen from '../Secciones/SecCen'

function Cuenta_plubl(props){

window.addEventListener('scroll', () => {
let value = window.scrollY
document.getElementById('sec_der').style.bottom = 90 + value / 260 + `px`;})

return(
        <section className="section_cuenta">
          <div className='conten_p_f'>
            <div className="portada">
            <div className='foto_perfil'>{props.img}</div>
            </div> 
            <div className='conten_n_v'>
            <p className='nombre'>{props.username}</p>
            <div className='conten_v_c'><p>Contador de visitas</p></div>
          </div>
          </div>
        <div className='main_cuenta'>  
          <SecCen></SecCen> 
           <div className='sec_datos'>
            <p>{props.email}</p>
           </div>
          <div className="seccion_derecha" id="sec_der">
            <Seach></Seach>
            <SecMen></SecMen>
            <Enlinea></Enlinea>
          </div>
        </div>  
        </section>
    )
}

export default Cuenta_plubl
