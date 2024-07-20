import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
const imgList = [
  "./assets/imageGallery/project-1/img-1.webp",
  "./assets/imageGallery/project-1/img-2.webp",
  "./assets/imageGallery/project-1/img-3.webp",
  "./assets/imageGallery/project-1/img-4.webp",
];
const projectInfo = {
  title: "EXPLORE THE SPACE",
  techs: "#Design, #UX, #React.js, #SASS ,#Responsive layout",
  description:
    "look for space tour , it gives you the best experience of space tour.It gives information about the planets and the stars.",
  link: "https://front-end-space-tour.vercel.app/",
  count: "01",
  prev: "/project-0",
  next: "/project-3",
};
const project1 = () => {
  return (
    <main className="image__gallery">
      <ImageBox imgList={imgList} />
      <ProjectInfo projectInfo={projectInfo} />
    </main>
  );
};
export default project1;
