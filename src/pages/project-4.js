import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
const imgList = [
  "./assets/imageGallery/project-4/img-1.webp",
  "./assets/imageGallery/project-4/img-2.webp",
  "./assets/imageGallery/project-4/img-3.webp",
  "./assets/imageGallery/project-4/img-4.webp",
  "./assets/imageGallery/project-4/img-5.webp",
  "./assets/imageGallery/project-4/img-6.webp",
  "./assets/imageGallery/project-4/img-7.webp",
  "./assets/imageGallery/project-4/img-8.webp",
  "./assets/imageGallery/project-4/img-9.webp",
];
const projectInfo = {
  title: "VELS FARMS",
  techs:
    "#Design,UX,#UX,#HANDBARS,#Node.js, #Nodemailer,#Responsive layout,#trade",
  description:
    "It is a web app that provides information about Vels Farms, allows users to learn about coconuts, and offers coconut products for order.",
  link: "https://tendercoke.com/",
  count: "04",
  prev: "/project-3",
  next: null,
};
const project4 = () => {
  return (
    <main className="image__gallery">
      <ImageBox imgList={imgList} />
      <ProjectInfo projectInfo={projectInfo} />
    </main>
  );
};
export default project4;
