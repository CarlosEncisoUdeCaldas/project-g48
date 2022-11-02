import IndexApp from '../IndexApp'
import Home from '../Home'
import Saludo from '../components/Saludo/Saludo'
import Contador from '../components/Contador/Contador'
import ContactenosPage from '../components/Contactenos/ContactenosPage'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from 'react-router-dom'

//aqui es donde viene la declaracion del array tipo objetos que va almacenar las rutas de la aplicacion
export const router = createBrowserRouter ( 
    createRoutesFromElements ( [
        <Route path="/" element={ <IndexApp />  } >      
            <Route index element={ <Home /> } />,
            <Route path="/saludo" element={ <Saludo />  } />,   
            <Route path="/contador" element={ <Contador />  } />,
            <Route path='/contactenos' element={ <ContactenosPage /> } />
        </Route>        
    ])
)