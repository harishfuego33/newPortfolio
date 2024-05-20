import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./comps/navbar";
import Start from "./sections/startSection";
import Project from "./sections/projectSection";
import About from "./sections/aboutSection";
import Contact from "./sections/contactSection";
import Project1 from "./pages/project-1";
import "./index.css";

export default function App() {
  return(
	<>
		<BrowserRouter>
			<Routes>
				<Route index element = {<Main />}/>
				<Route path="project-1" element={<Project1/>}/>
			</Routes>
		</BrowserRouter>
	</>
    );	
};
const Main = () =>
{
	return(
		<main className="MAIN ">
    		<NavBar />
    		<Start />
        	<Project />
        	<About />
        	<Contact />
    	</main>
	);
}

