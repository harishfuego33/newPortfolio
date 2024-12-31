const ImageBox = ({ imgList }) => {
  return (
    <picture className="imageStack">
      {imgList.map((imgList,index) => {
        return (
          <div className="imageStack-img" key={index}>
            <img src={imgList} className="img" alt="imageTitle" key={imgList} />
          </div>
        );
      })}
    </picture>
  );
};
export default ImageBox;
