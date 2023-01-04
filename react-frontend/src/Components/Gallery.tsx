import { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.scss';
import GalleryPicture from './GalleryPicture';

interface IimageData {
  id: string;
  link: string; // Only this is needed to set the source for the images
  animated: boolean;
  bandwidth: number;
  datetime: number;
  favorite: boolean;
  has_sound: boolean;
  height: number;
  width: number;
  size: number;
  type: string;
  views: number;
  edited: string;
  tags: string[];
  in_most_viral: boolean;
  nsfw: boolean;
  in_gallery: boolean;
  is_ad: boolean;
  ad_url: string;
  ad_type: number;
  title?: string;
  description?: string;
  section?: string;
  account_id?: string;
  account_url?: string;
  vote?: string;
};

const Gallery = () => {
  const [imgFocus, setImgFocus] = useState<number | null>(null);
  const [images, setImages] = useState<string[]>([])
  
  useEffect(() => {
    const clientID = 'ad7b6001aa922b5';
    const url = 'https://api.imgur.com/3/album/yz3qT8r/images';
    const config = {
      headers: {
        Authorization: `Client-ID ${clientID}`
      }
    };
    axios.get(url, config)
      .then((res) => {
        const imageStrings: string[] = res.data.data.map((img: IimageData) => {
          return img.link;
        })
        setImages(imageStrings);
      })
      .catch(err => console.log(err));
  }, []);

  const imageList = images.map((image: string, index: number) => {
    return <GalleryPicture isFocus={false} setFocus={setImgFocus} img={image} key={index} index={index} />;
  });

  return (
  <section className={'gallery'}>
    {imgFocus !== null ? <GalleryPicture isFocus={true} setFocus={setImgFocus} img={images[imgFocus]} key={imgFocus} index={imgFocus} /> : imageList}
  </section>
  );
};

export default Gallery;