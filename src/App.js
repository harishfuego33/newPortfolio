import NavBar from "./comps/navbar";
import Start from "./pages/startSection";
import Project from "./pages/projectSection";
import About from "./pages/aboutSection";
import Contact from "./pages/contactSection";
import "./index.css";

export default function App() {
  return(
    	<main className="MAIN">
    		<NavBar />
    		<Start />
        	<Project />
        	<About />
        	<Contact />
    	</main>
    );
};
