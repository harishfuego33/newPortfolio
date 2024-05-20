import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
const imgList = [
  "./assets/imageGalary/project-3/img-1.webp",
  "./assets/imageGalary/project-3/img-2.webp",
  "./assets/imageGalary/project-3/img-3.webp",
  "./assets/imageGalary/project-3/img-4.webp",
  "./assets/imageGalary/project-3/img-5.webp",
];
const projectInfo = {
  title: "AI BASED CLOUD BLOGGING",
  techs: "#Design, #UX, #HANDBARS , Node.js,Mongose,Responsive layout",
  description:
    " The AI-based Cloud Blogging platform is designed to provide users with valuable feedback on their educational blog posts. By leveraging advanced AI technology, the platform evaluates the content's quality, coherence, and accuracy. Users can upload their study blogs to receive insightful critiques and suggestions for improvement. The system aims to enhance the learning experience by offering personalized feedback tailored to individual knowledge levels. This innovative solution fosters a collaborative environment for knowledge sharing and growth.  ",
  link: "https://ai-blog-master.onrender.com",
  count: "03",
  prev: "/project-2",
  next: null,
};
const project3 = () => {
  return (
    <main className="image__gallery">
      <ImageBox imgList={imgList} />
      <ProjectInfo projectInfo={projectInfo} />
    </main>
  );
};
export default project3;
