import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection} from "firebase/firestore";

/* Import Configs */
import { auth, db } from "../config/firebase";

function CreateProject()
{
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notice, setNotice] = useState("");

    const [projectList, setProjectList] = useState([]);
    const projectCollectionRef = collection(db, "projects");

    const createAProject = async (e) => 
    {
        try
        {
            await addDoc(projectCollectionRef, {
                title: title,
                description: description
            });
            navigate("../ViewProjects");
        }
        catch
        {
            setNotice("Sorry, something went wrong. Please try again.");
        }
    }
    return (
        <div className="container-custom"> 
            <div className="center">
                <form className="form-custom">
                    <div>
                        <h1 className="h1-custom">Create Project</h1>
                    </div>

                    <div>
                        <p className="p-custom">Please fill out the following form to create a project:</p>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder = "Project Title" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder = "Project Description" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
                    </div>

                    <div>
                        <button type="button" class="btn btn-dark" onClick={(e) => createAProject(e)}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreateProject;