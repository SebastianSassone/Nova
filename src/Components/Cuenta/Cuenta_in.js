import  Seach  from "../Seach/Seach"
import SecMen from "../Secciones/Sec_men"
import Enlinea from "../Conten_secs/En_linea"
import SecCen from '../Secciones/Sec_cen'
import Conten_sec from '../Conten_secs/Coten_sec_iz'
import Footer from "../Footer/Footer"

import { useEffect, useState } from "react"

function Cuenta(){

const [name, setName] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');

const getName = () => {
    return sessionStorage.getItem('Name')
}      

const getLastname = () => {
    return sessionStorage.getItem('Lastname')
}

const getEmail = () => {
    return sessionStorage.getItem('Email');
}

useEffect(() => {
    setName(getName());
    setLastname(getLastname());
    setEmail(getEmail());
}, []);

window.addEventListener('scroll', () => {
let value = window.scrollY
document.getElementById('sec_der').style.bottom = 90 + value / 260 + `px`;}
)
  return(
        <section className="section_cuenta">
            <div className='conten_p_f'>
              <div className="portada">
              <div className='foto_perfil'></div>
              </div> 
              <div className='conten_n_v'>
              <p className='nombre'>{name + ' ' + lastname}</p>
              <div className='conten_v_c'><p className="boton_seguir">Seguidores 0</p></div>
            </div>
            </div>
          <div className='main_cuenta'>  
            <SecCen></SecCen> 
             <div className='sec_datos'>
              <p className="p_email">{email}</p>
              <Conten_sec></Conten_sec>
              <Footer></Footer>
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
export default Cuenta

