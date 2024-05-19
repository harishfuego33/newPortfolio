import project0 from "../assests/project-0.webp"
import project1 from "../assests/project-1.webp"
import project2 from "../assests/project-2.webp"
import project3 from "../assests/project-3.webp"
import { useRef,useEffect } from "react";
const Project = () =>
{
    const props = [
    {
        index:"00",
        class:"project-1",
        title:"SUSPICIOUS URL DETECTOR",
        webp:project0
    },
    {
        index:"01",
        class:"project-2",
        title:" EXPLORE THE SPACE",
        webp:project1
    },
    {
        index:"02",
        class:"project-3",
        title:"NATUOR FOR TOUR",
        webp:project2
    },
    {
        index:"03",
        class:"project-4",
        title:" AI BASED CLOUD BLOGGING",
        webp:project3
    }
    ]
    return(
        <Section  props={props}/>
    );
}
const Section=({props})=>{
    return(
        <section className={`flex justify-center project__section`}id="Project">
            <div className="row w-100 gap-2">
                <div className="intro__article col-7">
                    <div className="timeline alt"><div className="ellipse alt"></div></div>
                    <p className="Poject-tag opa-1">Project<span>&#47;&gt;</span></p>
                    <h4 className="project">Selected web projects...</h4>
                </div>
                <div className="grid ">
                {props.map((props)=>
                <Box atr={props.class} key={props.index} index={props.index} title ={props.title} webp = {props.webp}/>)}
                </div>
            </div>
         </section>
    );
}
const Box =({settings = { max: 25, perspective: 800, scale: 1, axis: null }, // Default settings
            reverse = 1, // Default reverse value
            fullPageListening = false,
            atr,index,title,webp // Default fullPageListening value
            }) => 
            {
            const boxRef = useRef(null);
            useEffect(() => {
                const box = boxRef.current;
                function calculateTilt(event) {
                    const rect = box.getBoundingClientRect();
                    const width = box.offsetWidth;
                    const height = box.offsetHeight;
                    const left = rect.left;
                    const top = rect.top;
                    let t, e;
                    if (fullPageListening) {
                        t = event.clientX / window.innerWidth;
                        e = event.clientY / window.innerHeight;
                    } else {
                        t = (event.clientX - left) / width;
                        e = (event.clientY - top) / height;
                    }
                    t = Math.min(Math.max(t, 0), 1);
                    e = Math.min(Math.max(e, 0), 1);
                    const tiltX = (reverse * (settings.max - t * settings.max * 2)).toFixed(2);
                    const tiltY = (reverse * (e * settings.max * 2 - settings.max)).toFixed(2);
                    return {
                        tiltX,
                        tiltY,
                        percentageX: (100 * t).toFixed(2),
                        percentageY: (100 * e).toFixed(2),
                        angle: Math.atan2(
                            event.clientX - (left + width / 2),
                            -(event.clientY - (top + height / 2))
                        ) * (180 / Math.PI)
                    };
                }
                function mousemove(event) {
                    const t = calculateTilt(event);
                    box.style.transform = `
                        perspective(${settings.perspective}px) 
                        rotateX(${settings.axis === "x" ? 0 : t.tiltY}deg) 
                        rotateY(${settings.axis === "y" ? 0 : t.tiltX}deg) 
                        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
                    `;
                }
                function mouseout(event) {
                    box.style.transform = `
                        perspective(${settings.perspective}px) 
                        rotateX(0deg) 
                        rotateY(0deg) 
                        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
                    `;
                }
                box.addEventListener('mousemove', mousemove);
                box.addEventListener('mouseleave', mouseout);
                return () => {
                    box.removeEventListener('mousemove', mousemove);
                    box.removeEventListener('mouseleave', mouseout);
                };
            }, [settings, reverse, fullPageListening]);
    return (
        <div className={`box ${atr} `} ref={boxRef}>
            <div className="img-box" >
                <img className = "img" src={webp} alt="project-img" type="image/webp"/>
            </div>
            <div className="project-info" >
                <h1 className="project-title">{title}</h1>
                <div className="project-line"></div>
                <h1 className="project-00">{index}</h1>
                <div className="project-arrow">&rarr;</div>
            </div>
      </div>
    );
};
export default Project;