import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

/* Import Configs */
import { db } from "../config/firebase";

function ViewProjects()
{
    const [usersList, setUsersList] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsersList = async (docID) => {
            try
            {
                const data = await getDocs(usersCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setUsersList(filteredData);
            }
            catch
            {

            }
        };
        getUsersList();
        //eslint-disable-next-line
    }, []);

    
    const [projectList, setProjectList] = useState([]);
    const projectCollectionRef = collection(db, "projects");

    useEffect(() => {
        const getProjectList = async () => {
            try
            {
                const data = await getDocs(projectCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setProjectList(filteredData);
            }
            catch
            {

            }
        };
        getProjectList();
    }, []);

    return(
    <div className="container-custom">
        <div className="center">
        <div className="form-custom">
        
                <div>
                    <h1 className="h1-custom">{projectList.map((project) => (project.title))}</h1>
                    <p className="p-custom"><b>Users:</b> {usersList.map((users) => (users.firstName))} {usersList.map((users) => (users.lastName))}</p>
                    <p className="p-custom"><b>Ratings:</b> {projectList.map((project) => (project.ratings))} 0 / 10</p>
                </div>

                <div>
                    <h1 className="h1-custom">Description</h1>
                    <p className="p-custom">{projectList.map((project) => (project.description))}</p>
                </div>

                <div>
                    <h1 className="h1-custom">Feedback</h1>
                    <p className="p-custom">{projectList.map((project) => (project.feedback))}</p>
                </div>
        </div>
        </div>
    </div>
    );
}

export default ViewProjects;