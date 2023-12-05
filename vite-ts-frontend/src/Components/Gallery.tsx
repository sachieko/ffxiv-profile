import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Gallery.scss";
import GalleryPicture from "./GalleryPicture";

type IimageData = {
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
  const [images, setImages] = useState<string[]>([]);

  const galleryRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleOnDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percent);
  };

  const handleOnMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercent(nextPercentage);

    if (galleryRef.current) {
      const transformValue = `translate(${percent}%, -50%)`;
      galleryRef.current.style.transform = transformValue;

      const images = galleryRef.current.getElementsByClassName('img');
      for (const image of images) {
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    }
  };

  const testImgs: string[] = [
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
    "/src/static/profilepic1.jpg",
  ];
  if (images.length == 0) {
    setImages(testImgs);
  }

  // useEffect(() => {
  //   const clientID = "ad7b6001aa922b5";
  //   const url = "https://api.imgur.com/3/album/yz3qT8r/images";
  //   const config = {
  //     headers: {
  //       Authorization: `Client-ID ${clientID}`,
  //     },
  //   };
  //   axios
  //     .get(url, config)
  //     .then((res) => {
  //       const imageStrings: string[] = res.data.data.map((img: IimageData) => {
  //         return img.link;
  //       });
  //       setImages(imageStrings);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const imageList = images.map((image: string, index: number) => {
    return (
      <GalleryPicture
        isFocus={false}
        setFocus={setImgFocus}
        img={image}
        key={index}
        index={index}
      />
    );
  });

  return (
    <section
      ref={galleryRef}
      id={"gallery"}
      onMouseDown={handleOnDown}
      onMouseMove={handleOnMove}
      onMouseUp={handleOnUp}
      onMouseLeave={handleOnUp}
    >
      {imageList}
    </section>
  );
};

export default Gallery;
