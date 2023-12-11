import { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";

/* Import Configs */
import { db } from "../config/firebase";

function Dashboard()
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
 

    return (
        <div className="container-custom"> 
            <div className="center">
                <form className="form-custom">

                    <div>
                        <h1 className="h1-custom">Dashboard</h1>
                    </div>

                    <div>
                        <p className="p-custom"><b>{usersList.map((users) => (users.firstName))}</b> <b>{usersList.map((users) => (users.lastName))}</b></p>
                    </div>

                    <div>
                        <p className="p-custom"><b>Institution: </b>{usersList.map((users) => (users.institution))}</p>
                    </div>

                    <div>
                        <p className="p-custom"><b>Position: </b>{usersList.map((users) => (users.position))}</p>
                    </div>
                
                    <div>
                        <p className="p-custom"><b>Email Address: </b><a href="mailto:">{usersList.map((users) => (users.email))}</a> </p>
                    </div>
                
                </form>
            </div>
        </div>
    );
}

export default Dashboard;