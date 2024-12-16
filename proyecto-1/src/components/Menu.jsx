import '../style/Menu.css'
import {BrowserRouter, Route, Routes, Link, Router} from "react-router-dom";
import Nav2 from './Nav2.jsx'
import Navegador from './Navegador.jsx';
import Pag2 from './Pag2.jsx';
import Pag3 from './Pag3.jsx';
import Mag from '../assets/mag.jpg'
import {Heart, ShoppingCart, User} from "lucide-react"

function Menu(){
    
    return(
        <div className="encabesado" >
            <div className='navegador'>
                <div className="navegador"><h1 className='titulo' >Start<span className='titulo2'>Game</span></h1></div>
                <div className="item">
                    <a ><ShoppingCart strokeWidth={1} className='cursor-pointer'/></a>
                </div>
            </div>
            
            <div className="rutas">
            <BrowserRouter>
                  <nav>  
                   
                       <Link to ="/"></Link>
                       <Link to ="/Navegador.jsx">Enlace pagdos</Link>
                    
                  </nav>
                  <Routes>
                        <Route index path="/" element={<Pag3></Pag3> }/>
                        <Route path="/Navegador.jsx" element={<Navegador></Navegador>}/>
                  </Routes>
                
            </BrowserRouter>
            </div>
            
            
        </div>
    );    
}
export default Menu

