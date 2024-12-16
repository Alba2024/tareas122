import '../style/Navegador.css';
import { Link } from 'react-router-dom';

function Navegador(){
    return(
        <div className="Navegador">
            <div className='leftSide'>
                <h1 className='titulo'>Start<span className='titulo2'>Game</span></h1>
            </div>
            <div className="rightSide">
                <Link to="/">home</Link>
                <Link to="/Cars.jsx">Autos y Pistolas</Link>
                <Link to="/Barby.jsx">Barby</Link>
                <Link to="/Uno.jsx">Uno</Link>
            </div>
        </div>
    )
}
export default Navegador;
