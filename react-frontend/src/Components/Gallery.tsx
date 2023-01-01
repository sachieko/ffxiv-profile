import { useState } from 'react';
import sampleImage from '../img/test1.jpg';
import './Gallery.scss';
import GalleryPicture from './GalleryPicture';

const images: string[]= [];

for (let i = 0; i < 20; i++) {
  images.push(sampleImage);
}

const Gallery = () => {
  const [imgFocus, setImgFocus] = useState<number | null>(null);

  const imageList = images.map((image: string, index: number) => {
    return <GalleryPicture isFocus={false} setFocus={setImgFocus} img={image} key={index} index={index} />;
  });

  return (
  <div className={'gallery'}>
    {imgFocus !== null ? <GalleryPicture isFocus={true} setFocus={setImgFocus} img={images[imgFocus]} key={imgFocus} index={imgFocus} /> : imageList}
  </div>
  );
};

export default Gallery;