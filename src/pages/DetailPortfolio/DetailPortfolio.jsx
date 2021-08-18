import './DetailPortfolio.scss';
import GalleryLines from '../../components/GalleryLines/GalleryLines';
import HarryPotter from '../../mocks/HarryPotter';


const DetailPortfolio = () => {
    return ( 
        <div className="detail-portfolio">
            <GalleryLines height="80vh" width="70vw" array={HarryPotter}/>
        </div>
     );
}
 
export default DetailPortfolio;