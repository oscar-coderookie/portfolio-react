import './NodeJsDetail.scss';
import { useParams, useLocation } from 'react-router-dom';

const NodeJsDetail = (props) => {
    let location = useLocation();

    const {id} = useParams()
    console.log(props);

    

    return ( 
        <div className="nodejs-detail">
        <h1>{location.pathname}</h1>
        {props.title}
            
        </div>
     );
}
 
export default NodeJsDetail;