import { useState } from "react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Register() {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { auth, setAuth } = useAuth();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/register", {
                username,
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(data);
            setAuth({ ...data });
            navigate("/", { replace: true });

        } catch (err) {
            console.log(err);
        }


    }

    return (
        <>
            <div className="registerContainer">
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="bob@youremail.com" onChange={(e) => setEmail(e.target.value)}></input>

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>

                    <button>Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;