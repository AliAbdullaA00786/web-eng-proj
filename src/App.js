/* Imports */

/* Import Components */
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

/* Import Pages */
import About from "./pages/About";
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import CreateProject from "./pages/CreateProject";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Project from "./pages/Project";
import Register from "./pages/Register";
import Search from "./pages/Search";
import ViewProjects from "./pages/ViewProjects";

/* Import Stylesheets */
import './stylesheet/styles.css';

const App = () => {
    return (
        <div className = "background-custom">
             <Navbar />
             <div className="container">
                <Routes>
                    <Route path = "/" element= {<Landing/>}></Route>
                    <Route path = "/about" element= {<About/>}></Route>
                    <Route path = "/conditions" element= {<Conditions/>}></Route>
                    <Route path = "/contact" element= {<Contact/>}></Route>
                    <Route path = "/createproject" element= {<CreateProject/>}></Route>
                    <Route path = "/dashboard" element= {<Dashboard/>}></Route>
                    <Route path = "/landing" element= {<Landing/>}></Route>
                    <Route path = "/login" element= {<Login/>}></Route>
                    <Route path = "/privacy" element= {<Privacy/>}></Route>
                    <Route path = "/project" element= {<Project/>}></Route>
                    <Route path = "/register" element= {<Register/>}></Route>
                    <Route path = "/search" element= {<Search/>}></Route>
                    <Route path = "/viewprojects" element= {<ViewProjects/>}></Route>
                </Routes>
            <Footer />
            </div>
        </div>
    );
}
export default App;