import './Banner.css';
import BannerImage from '../imagens/Banner.png';

const BannerComponent = () => {
  return (
    <div>
      <img src={BannerImage} alt="Logo" className='Banner'/>
    </div>
  );
};

export default BannerComponent;
