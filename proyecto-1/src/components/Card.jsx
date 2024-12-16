import '../style/Card.css'
import Cars from '../Pags/Cars'
import { Button } from 'reactstrap'
function Card(props){
    return(
        <div className="blocks">
            
            <a href="http://"><img className ="imagen"src={props.img} alt="img" /></a>
            <h1>{props.name}</h1>
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