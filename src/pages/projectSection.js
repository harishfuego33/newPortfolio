import projectbg from "../assests/project-1.webp"
import { useRef,useEffect } from "react";
const Project = () =>
{
    return(
    <section className="flex  justify-center project__section" id="Project">
        <div className="row w-100 gap-2">
            <div className="intro__article col-7">
                <div className="timeline alt"><div className="ellipse alt"></div></div>
                <p className="Poject-tag opa-1">Project<span>&#47;&gt;</span></p>
                <h4 className="project">Selected web projects...</h4>
            </div>
            <div className="grid ">
                <Box atr = "box project-1"/>
                <Box atr = "box project-2" />
            </div>
        </div>
    </section>
    );
}
const Box = ({atr}) => {
    const boxRef = useRef(null) 
    useEffect(()=>{
        const box = boxRef.current;
        const height = box.clientHeight;//getting the height of the box
        const width = box.clientWidth;//getting the weighth of the box 
        const threshold = 20    ;
        function mousemove(e)
        {  const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const yRotation = threshold * ( ( x - width / 2 ) /  width)
            const xRotation = -threshold * ( ( y - height / 2 ) /  height)

            const string = `perspective(1200px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            box.style.transform = string;
        }
        function mouseout()
        {
            box.style.transform =  `perspective(1200px) scale(1) rotateX(0deg) rotateY(0deg)`;
        }
        function mouseup()
        {
            box.style.transform =  `perspective(1200px) scale(0.9) rotateX(0deg) rotateY(0deg)`;
        }
        function mousedown(){
            box.style.transform =  `perspective(1200px) scale(1.1) rotateX(0deg) rotateY(0deg)`;
        }
        box.addEventListener("mousemove",mousemove)
        box.addEventListener("mouseout",mouseout)
        box.addEventListener("mouseup",mouseup)
        box.addEventListener("mousedown",mousedown)
        return ()=>{
            
            box.removeEventListener("mousemove",mousemove)
            box.removeEventListener("mouseout",mouseout)
            box.removeEventListener("mouseup",mouseup)
            box.removeEventListener("mousedown",mousedown)
        }

    },[])
    return (
      <div className={atr} ref={boxRef}>
        <div className="img-box">
            <img className = "img" src={projectbg} alt="project-img" />
        </div>
        <div className="project-info">
            <h1 className="project-title">SUSPICIOUS URL DETECTOR</h1>
            <div className="project-line"></div>
            <h1 className="project-00">00</h1>
            <div className="project-arrow">&rarr;</div>
        </div>
      </div>
    );
  };
export default Project;