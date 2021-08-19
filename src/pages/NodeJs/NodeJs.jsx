import WebCard from '../../components/WebCard/WebCard';
import NodeJsProjects from "../../mocks/NodeJsProjects"
import './NodeJs.scss';

const NodeJs = () => {
    return ( 
        <div className="node">
            {NodeJsProjects.map((node) => {
                return (
                    <WebCard 
                    backgroundColor="#edf0f2"
                    thumbnail={node.thumb}
                    title={node.title}
                    deployUrl={node.deploy}
                    repositorie={node.repository}
                    key={node.id} />
                );
            })}
        </div>
     );
}
 
export default NodeJs;