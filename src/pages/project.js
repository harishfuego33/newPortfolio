import React, { useState, useEffect } from 'react';
import ImageBox from "../comps/imgBox";
import ProjectInfo from "../comps/projectInfo";
import data from "./data.json";
const Project = () => {
  const [images, setImages] = useState([]);
  const [project, setProject] = useState({});
  const path = (window.location.pathname).split("/")[2] * 1;
  useEffect(() => {
    const imgList = data[path].images;
    const projectInfo = {
      title: data[path].title,
      techs: data[path].techs,
      description: data[path].description,
      link: data[path].link,
      count: data[path].count,
      prev: path !==0? `/project/${path-1}`: null,
      next: data.length-1 > path ? `/project/${path+1}`: null,
    };
    setImages(imgList);
    setProject(projectInfo);
  }, [path,images,project]); 

  return (
    <main className="image__gallery">
      <ImageBox imgList={images} />
      <ProjectInfo projectInfo={project} />
    </main>
  );
};
export default Project;
