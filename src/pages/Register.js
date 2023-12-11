import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";

/* Import Configs */
import { auth, db } from "../config/firebase";

function Register()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [institution, setInstituion] = useState("");
    const [position, setPosition] = useState("");
    //const [role, setRole] = useState("");
    const [notice, setNotice] = useState("");

    const [usersList, setUsersList] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsersList = async () => {
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
    }, []);

    const registerWithEmailAndPassword = async (e) =>
    {
        e.preventDefault();
        if(!email.includes('@'))
            setNotice("Invalid email address.");
        else if(email === "")
            setNotice("Email field cannot be empty.");
        else if (password === "" || confirmPassword === "")
            setNotice("Password fields cannot be empty.");
        else if (password !== confirmPassword)
            setNotice("Passwords do not match.");
        else if (firstName === "")
            setNotice("First Name field cannot be empty.");
        else if (lastName === "")
            setNotice("Last Name field cannot be empty.");
        else if (institution === "")
            setNotice("Institution field cannot be empty.");
        else if (position === "")
            setNotice("Position field cannot be empty.");
        else
        {
            try
            {
                await createUserWithEmailAndPassword(auth, email, password);
                await addDoc(usersCollectionRef, {
                    email: email,
                    firstName: firstName, 
                    institution: institution, 
                    lastName: lastName, 
                    position: position,
                });
                /*await db.collection("users").doc(cred.user.uid).set({firstName, institution, lastName, position});*/
                /*db.collection("users").doc(cred.user.uid).set({firstName, institution, lastName, position});*/
                navigate("../Dashboard");
            }
            catch
            {
                setNotice("Sorry, something went wrong. Please try again.");
            }
        }
    }

    const goToLoginPage = async (e) =>
    {
        e.preventDefault();
        try
        {
            navigate("../Login");
        }
        catch
        {
            setNotice("Failed to go to register page");
        }
    }
    
    return (
        <div className="container-custom">
            {"" !== notice && <div className="alert alert-warning" role="alert"> {notice} </div>}
            
            <div className="center">
                <form className="form-custom">
                    <div>
                        <h1 className="h1-custom">Register</h1>
                    </div>

                    <div>
                        <p className="p-custom">Please type your credentials below to log into your account.</p>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder = "Email Address" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "password" placeholder ="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "password" placeholder ="Confirm Password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder ="First Name" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder ="Last Name" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder ="Institution" value = {institution} onChange = {(e) => setInstituion(e.target.value)}/>
                    </div>

                    <div>
                        <input className="text-field-custom" type = "text" placeholder ="Position" value = {position} onChange = {(e) => setPosition(e.target.value)}/>
                    </div>

                    <div>
                        <button type="button" class="btn btn-dark" onClick={(e) => registerWithEmailAndPassword(e)}>Submit</button>
                        <button type="button" class="btn btn-dark" onClick={(e) => goToLoginPage(e)}>Sign Into Existing Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;