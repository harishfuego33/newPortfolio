import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
const imgList = [
  "./assets/imageGalary/project-0/img-1.webp",
  "./assets/imageGalary/project-0/img-2.webp",
  "./assets/imageGalary/project-0/img-3.webp",
  "./assets/imageGalary/project-0/img-4.webp",
  "./assets/imageGalary/project-0/img-5.webp",
  "./assets/imageGalary/project-0/img-6.webp",
];
const projectInfo = {
  title: "SUSPICIOUS URL DETECTOR",
  techs: "#Design, #UX, #Node, #Ejs, #Python, #SQL ,CSS3 ",
  description:
    "It is used to determine whether a given URL is suspicious or not. It helps to identify potentially dangerous websites that may scam a user or steal personal information.",
  link: "https://github.com/harishfuego33/finalYearProject",
  count: "00",
  prev: null,
  next: "/project-2",
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
