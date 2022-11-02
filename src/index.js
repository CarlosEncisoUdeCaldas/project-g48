import React from 'react';
import ReactDOM from 'react-dom/client';
import IndexApp from './IndexApp';
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import Saludo from './components/Saludo/Saludo';
import Contador from './components/Contador/Contador';
import Home from './Home';


//aqui es donde viene la declaracion del array tipo objetos que va almacenar las rutas de la aplicacion
const router = createBrowserRouter ( 
    createRoutesFromElements ( [
        <Route path="/" element={ <IndexApp />  } >      
            <Route path="/saludo" element={ <Saludo />  } />,   
            <Route path="/contador" element={ <Contador />  } />,
            <Route index element={ <Home /> } />
        </Route>        
    ])
)

const root = ReactDOM.createRoot( document.getElementById("root") );
root.render( 
<React.StrictMode>
    <RouterProvider router = { router } />
</React.StrictMode>
) ;
