import { useState } from "react"

function Registro(){
  
function ocultar(){
  document.getElementById('section_registro').style.display = 'none'
}

const [name, setName] = useState("")
const [lastname, setlastname] = useState("")
const [email, setEmail] = useState("")
const [pasword1, setPasword1] = useState("")
const [pasword2, setPasword2] = useState("")

let handleSubmit = async (e) => {
  e.preventDefault();
  if(pasword1 === pasword2){
  sessionStorage.setItem('Name', name);
  sessionStorage.setItem('Lastname', lastname);
  sessionStorage.setItem('Email', email);
  sessionStorage.setItem('Pasword', pasword2);
  setName("")
  setlastname("")
  setEmail("")
  setPasword1("")
  setPasword2("")
  alert('Registro realizado con exito')
  document.getElementById('section_registro').style.display = 'none'
}else{
  alert('Las contraseñas no coinciden')
}
}

return(
    <section className="section_registro" id="section_registro">
        <div className="div_registro">
        <h1>NOVA</h1>
        <p>Te doy la bienvenida usuario!</p>
              <form className="form_registro" onSubmit={handleSubmit}>
                <p>Resgistro</p>
              <label  name="name" >Nombre</label>
              <input type="text" name="name" min-legth="3" required
               value={name}
               onChange={(e) => setName(e.target.value)}
              ></input> 
              <label  name="lastname">Apellido</label>
              <input type="text" name="lastname" min-legth="3" required
               value={lastname}
               onChange={(e) => setlastname(e.target.value)}
              ></input> 
              <label  name="email">Email</label>
              <input type="email" name="email" min-legth="3" required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              ></input> 
              <label  name="password">Contraseña</label>
              <input type="password" name="password" min-legth="9" required
               value={pasword1}
               onChange={(e) => setPasword1(e.target.value)}
              ></input> 
              <label  name="password">Repetir contraseña</label>
              <input type="password" name="password" min-legth="9" required
               value={pasword2}
               onChange={(e) => setPasword2(e.target.value)}
              ></input> 
              <button type="submit">Registrarse</button>
              </form>
              <button onClick={ocultar}>Prueba sin registro</button>      
        </div>    
    </section>
)}

export default Registro

