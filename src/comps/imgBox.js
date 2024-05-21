const ImageBox = ({ imgList }) => {
  return (
    <picture className="imageStack">
      {imgList.map((imgList) => {
        return (
          <div className="imageStack-img">
            <img src={imgList} className="img" alt="imageTitle" key={imgList} />
          </div>
        );
      })}
    </picture>
  );
};
export default ImageBox;
