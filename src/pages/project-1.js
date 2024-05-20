import ImageBox from "../comps/imgBox";
import { NavLink } from "react-router-dom";
const imgList = 
    [
            "./assets/imageGalary/project-1/img-1.webp",
            "./assets/imageGalary/project-1/img-2.webp",
            "./assets/imageGalary/project-1/img-3.webp",
            "./assets/imageGalary/project-1/img-4.webp",
            "./assets/imageGalary/project-1/img-5.webp",
            "./assets/imageGalary/project-1/img-6.webp",  
    ];
const project1 = () =>
    {
        return(
            <main className="image__gallery">
                <ImageBox imgList={imgList}/>
                <section className="project__info">
                    <nav className="flex align-center image__gallery-navbar">
                        <NavLink to="/" className="project__nav-link">&#8592;</NavLink>
                        <div className="nextprev">
                            <NavLink className="nextprev-btn">&#8592;</NavLink>
                            <span className="lessthan">&#47;</span>
                            <NavLink className="nextprev-btn">&#8594;</NavLink>
                        </div>
                    </nav>
                    <article className="flex flex-col justify-space-between h-90">
                        <div>
                            <div className="techStacks">
                                <p className="techs ff-Robot ">#Design, #UX, #PHP, #Wordpress, #jQuery, #Car manager</p>
                            </div>
                            <h1 className="project-title ff-size-4rem ff-Robot">SUSPICIOUS URL DETECTOR</h1>
                            <p className="project-description ff-Robot">It is used to determine whether a given URL is suspicious or not.
                            It helps to identify potentially dangerous websites that may scam a user or steal personal information.
                            </p>
                            <a className="resume" href="https://drive.google.com/file/d/1Hbe_8Q_1tGQWj8-8dGxWRW_FGKx06vbB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="resume-btn">
                            VIST
                            <button className="btn-2">
                            </button>
                        </div>  
                        </a>
                        </div>
                        <div className="project-num">
                            <div className="project-info-line w-80"></div> <span className="project-count">00</span>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
export default project1;