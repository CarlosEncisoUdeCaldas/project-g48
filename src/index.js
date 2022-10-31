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


//aqui es donde viene la declaracion del array tipo objetos que va almacenar las rutas de la aplicacion
const router = createBrowserRouter ( 
    createRoutesFromElements ( [
        <Route path="/" element={ <IndexApp />  } />,      //esta es la posicion 0 del array router    
        <Route path="/saludo" element={ <Saludo />  } />,          //posicion 1 del array router
        <Route path="/contador" element={ <Contador />  } />,          //posicion 2 del array router
    ])
)

const root = ReactDOM.createRoot( document.getElementById("root") );
root.render( 
<React.StrictMode>
    <RouterProvider router = { router } />
</React.StrictMode>
) ;
