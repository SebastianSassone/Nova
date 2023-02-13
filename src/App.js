import Main from './Components/Secciones/Main';
import Cuenta from './Components/Cuenta/Cuenta_in';
import Registro from './Components/Cuenta/Registro';
import Mensajes from './Components/Mensajes/Mensajes';
import Notificaciones from './Components/Notificaciones/Notificaciones'

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navegacion from './Components/Navegacion/Navegacion';
import rutas from './DB/rutas.json'

function App(){
return (
<BrowserRouter>
<Registro></Registro>
<Navegacion links={ rutas }/>
          <Routes>
              <Route className="inicio" path='/Nova/inicio' element={<Main/>}></Route>
              <Route path='/Nova/mensajes' element={<Mensajes></Mensajes>}></Route>
              <Route path='/Nova/notificaciones' element={<Notificaciones></Notificaciones>}></Route>
              <Route path='/Nova/cuenta' element={<Cuenta></Cuenta>}></Route>
        </Routes>    
</BrowserRouter>
)
}


export default App;
