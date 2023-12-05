interface IGalleryPictureProps {
  isFocus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<number | null>>;
  img: string;
  index: number;
}

const GalleryPicture = ({
  isFocus,
  setFocus,
  img,
  index,
}: IGalleryPictureProps) => {
  return (
    <>
      {isFocus ? (
        <div className="focus-img" onClick={() => setFocus(null)}>
          <img
            src={img}
            alt="character scene"
            draggable="false"
          />
        </div>
      ) : (
        <img
          className="img"
          src={img}
          onClick={() => setFocus(index)}
          alt="character scene"
          draggable="false"
        />
      )}
    </>
  );
};

export default GalleryPicture;
