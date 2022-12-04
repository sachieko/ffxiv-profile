import sampleImage from '../img/test1.jpg';
import './Gallery.scss';

const Gallery = () => {

  return (
  <div className={'gallery'}>
    <div className='img'><img src={sampleImage} alt='character'/></div>
  </div>
  );
};

export default Gallery;