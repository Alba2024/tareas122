import '../style/Card.css'
import Cars from '../Pags/Cars'
import { Button } from 'reactstrap'
function Card(props){
    return(
        <div className="blocks">
            <h1>{props.name}</h1>
            <a href="http://"><img className ="imagen"src={props.img} alt="img" /></a>
            <p >{props.datos}</p>
            <Button
               color="info"
               outline
            >
                {props.button}
            </Button>
        </div>
    )
}
export default Card