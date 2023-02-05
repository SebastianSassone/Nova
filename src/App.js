import Main from './Components/Secciones/Main';
import Cuenta from './Components/Cuenta/Cuenta_in';
import Registro from './Components/Cuenta/Registro';
import NuevoPost from './Components/Post/Nuevo_post';
import Mensajes from './Components/Mensajes/Mensajes';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navegacion from './Components/Navegacion/Navegacion';
import rutas from './DB/rutas.json'

function App(){
return (
<BrowserRouter>
<Registro></Registro>
<Navegacion links={ rutas }/>
          <Routes>
              <Route className="inicio" path='/' element={<Main/>}></Route>
              <Route path='/mensajes' element={<Mensajes></Mensajes>}></Route>
              <Route path='/notificaciones' element={<NuevoPost></NuevoPost>}></Route>
              <Route path='/cuenta' element={<Cuenta></Cuenta>}></Route>
        </Routes>    
</BrowserRouter>
)
}


export default App;
