import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

/* Import Configs */
import { auth } from "../config/firebase";

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const navigate = useNavigate();

    const loginWithEmailAndPassword = async (e) =>
    {
        e.preventDefault();
        if(!email.includes('@'))
            setNotice("Invalid email address.");
        else
        {
            try
            {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("../Dashboard");
            }
            catch
            {
                setNotice("Incorrect email or password combination");
            }
        }
    }

    const goToRegisterPage = async (e) =>
    {
        e.preventDefault();
        try
        {
            navigate("../Register");
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
                        <h1 className="h1-custom">Login</h1>
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
                        <button type="button" class="btn btn-dark" onClick={(e) => loginWithEmailAndPassword(e)}>Submit</button>
                        <button type="button" class="btn btn-dark">Forgot Your Password?</button>
                        <button type="button" class="btn btn-dark" onClick={(e) => goToRegisterPage(e)}>Register Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;