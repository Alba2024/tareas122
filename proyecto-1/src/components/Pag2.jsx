import '../style/Pag2.css'
import Card from './Card';
function Pag2(){
    return(
        <div className="home" >
            <div className="cards">
                <div className="card">
                    <Card name="Tanques" img={Tank1} button="Este es un veiculo de guerra que dispara proyectiles reales " />
                </div>
            </div> 
        </div>
    )
}
export default Pag2;