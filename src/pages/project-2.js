import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
const imgList = [
  "./assets/imageGalary/project-2/img-1.webp",
  "./assets/imageGalary/project-2/img-2.webp",
  "./assets/imageGalary/project-2/img-3.webp",
  "./assets/imageGalary/project-2/img-4.webp",
  "./assets/imageGalary/project-2/img-5.webp",
];
const projectInfo = {
  title: "Natuor for tour",
  techs: "#Design, #UX, #HTML, #SASS ,Responsive layout",
  description:
    "It is a tour website that allows user to book the tour to visit the natural places and alocate the tour guid .It has 3 different region to book and give , It is a responsive website.",
  link: "https://front-end-space-tour.vercel.app/",
  count: "02",
  prev: "/project-1",
  next: "/project-3",
};
const project2 = () => {
  return (
    <main className="image__gallery">
      <ImageBox imgList={imgList} />
      <ProjectInfo projectInfo={projectInfo} />
    </main>
  );
};
export default project2;
